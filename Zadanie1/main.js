const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;
const restServer = express();

/*
    Request/response format (JSON)
    {
        "string": <value>
    }
*/
restServer.put('/', bodyParser.json(), (request, response) => {
    try {
        return response.send({ string: request.body.string.split("").reverse().join("") });
    } catch (error) {
        response.status = 400;
        return response.send();
    }
});


restServer.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});