const express = require('express');
const bodyParser = require('body-parser');

const port = "8080";
const restServer = express();

restServer.put('/analyzeString', bodyParser.json(), (request, response) => {
    return response.status(200).send();
});

restServer.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});