const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;
const restServer = express();

/*
    Request/response format (JSON)
    {
        "string": <value>
    }

    Test: curl -X PUT -H "Content-Type: application/json" -d '{ "string": "banan" }' localhost:8000
*/
restServer.put('/', bodyParser.json(), (request, response) => {
    let message;
    try {
        message = { string: request.body.string.split("").reverse().join("") };
    } catch (error) {
        response.status(400).json({ error: error.toString() });
    }
    return response.send(message);
});


restServer.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});