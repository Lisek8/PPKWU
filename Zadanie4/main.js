const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise-native');
const HTMLParser = require('node-html-parser');

const port = '8080';
const restServer = express();
const panoramaFirmSearchUrl = 'https://panoramafirm.pl/szukaj';

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

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});