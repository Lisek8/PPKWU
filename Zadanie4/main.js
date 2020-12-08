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
  console.log(apiData);
});

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});