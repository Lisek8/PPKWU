const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise-native');
const HTMLParser = require('node-html-parser');
const fs = require('fs');
const { json } = require('body-parser');
const path = require('path');

const port = '8080';
const restServer = express();
const panoramaFirmSearchUrl = 'https://panoramafirm.pl/szukaj';

function createVCard(vcfData) {
  addressParts = vcfData.address.split(',');
  const vCardData = [];
  vCardData.push('BEGIN:VCARD');
  vCardData.push('VERSION:3.0');
  vCardData.push(`N:${vcfData.name}`);
  vCardData.push(`FN:${vcfData.name}`);
  vCardData.push(`ORG:${vcfData.name}`);
  vCardData.push(`TITLE:${vcfData.name}`);
  vCardData.push(`ADR;TYPE=WORK,PREF:;;${addressParts[0]};${addressParts[1]}`);
  vCardData.push(`TEL;TYPE=WORK,VOICE:${vcfData.phoneNumber}`);vCardData.push(`TEL;TYPE=WORK,VOICE:${vcfData.phoneArea !== 'null' ? '(' + vcfData.phoneArea + ')' : ''}${vcfData.phoneNumber}`);
  if (vcfData.email !== 'brak') {
    vCardData.push(`EMAIL;TYPE=WORK:${vcfData.email}`);
  }
  if (vcfData.www !== 'null' && vcfData.www !== 'brak') {
    vCardData.push(`URL:${vcfData.www}`);
  }
  if (vcfData.location != null) {
    vCardData.push(`GEO:geo:${vcfData.location.lat},${vcfData.location.lon}`);
  }
  vCardData.push('END:VCARD');

  return vCardData.join('\n');
}

restServer.get('/search', bodyParser.json(), async (request, response) => {
  const apiData = await requestPromise({
    method: 'GET',
    uri: panoramaFirmSearchUrl + `?k=${request.query.proffession}`
  });
  let requestedData = [];
  HTMLParser.parse(apiData).querySelector('body').childNodes.filter(element => {
    if (element.rawTagName === 'script' && element.rawAttrs === 'type="text/javascript"') {
      requestedData = JSON.parse(element.text.trim().split(';')[0].split(' = ')[1].trim());
    }
  });
  const parsedData = [];
  requestedData.forEach(arrayElement => {
    arrayElement.companies.forEach(company => {
      parsedData.push({
        name: company.name,
        address: company.address,
        www: company.contact != null ? company.contact.www : 'brak',
        email: company.contact != null ? company.contact.email : 'brak',
        phoneArea: company.contact != null ? company.contact.phone.area : 'brak',
        phoneNumber: company.contact != null ? company.contact.phone.number : 'brak',
        location: arrayElement.coordinates
      });
    });
  });
  response.json(parsedData);
});

restServer.get('/vCard', bodyParser.json(), async (request, response) => {
  try {
    const vcfData = request.query;
    for (let property in vcfData) {
      vcfData[property] = unescape(vcfData[property]);
    }
    fs.writeFileSync('output.vcf', createVCard(vcfData));
    response.set('Content-Type', 'text/x-vcard');
    response.sendFile(path.join(__dirname, 'output.vcf'));
  } catch (error) {
    response.sendStatus(500);
  }
});

restServer.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/htmlPage' + '/index.html'));
});

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});