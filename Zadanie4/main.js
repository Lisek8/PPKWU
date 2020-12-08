const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise-native');
const HTMLParser = require('node-html-parser');
const fs = require('fs');

const port = '8080';
const restServer = express();
const panoramaFirmSearchUrl = 'https://panoramafirm.pl/szukaj';

function createVCard() {
  const exampleObject = {
    "name": "Fhu Nypel Usługi Hydrauliczne Łukasz Szydliński",
    "address": "ul. Cieszkowskiego 4/27, 41-303 Dąbrowa Górnicza  śląskie",
    "www": "http://Hydraulikdabrowagornicza.com",
    "email": "brak",
    "phoneArea": null,
    "phoneNumber": "698095573",
    "location": {
        "lat": 50.31829,
        "lon": 19.23723
    }
  };

  const vCardData = [];

  vCardData.push('BEGIN:VCARD');
  vCardData.push('VERSION:3.0');
  vCardData.push(`N:${exampleObject.name}`);
  vCardData.push(`FN:${exampleObject.name}`);
  vCardData.push(`ORG:${exampleObject.name}`);
  vCardData.push(`TITLE:${exampleObject.name}`);
  vCardData.push(`TEL;TYPE=WORK,VOICE:(111) 555-1212`);
  vCardData.push('END:VCARD');

  fs.writeFileSync('output.vcf', vCardData.join('\n'));
}

restServer.get('/search', bodyParser.json(), async (request, response) => {
  const apiData = await requestPromise({
    method: 'GET',
    uri: panoramaFirmSearchUrl + '?k=' + escape('hydraulik') + '&l=' + escape('łódź')
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
        www: company.contact.www,
        email: company.contact.email,
        phoneArea: company.contact.phone.area,
        phoneNumber: company.contact.phone.number,
        location: arrayElement.coordinates
      });
    });
  });
  response.json(parsedData);
});

createVCard();

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});