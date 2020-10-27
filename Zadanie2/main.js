const express = require('express');
const bodyParser = require('body-parser');

const port = "8080";
const restServer = express();

function analyzeString(stringToAnalyze, responseBody) {
    for (let char of stringToAnalyze.split("")) {
        if (char.toLowerCase() !== char.toUpperCase()) {
            if (char === char.toUpperCase()) {
                responseBody.uppercaseCount += 1;
            } else {
                responseBody.lowercaseCount += 1;
            }
            continue;
        }
        
        if (isNaN(parseInt(char))) {
            responseBody.specialCount += 1;
            responseBody.specialUsed.push(char);
        } else {
            responseBody.numberCount += 1;
        }
    }
    responseBody.specialUsed = [... new Set(responseBody.specialUsed)];
}

restServer.put('/analyzeString', bodyParser.json(), (request, response) => {
    const responseBody = {
        lowercaseCount: 0,
        uppercaseCount: 0,
        numberCount: 0,
        specialCount: 0,
        specialUsed: []
    };
    try {
        analyzeString(request.body.string, responseBody);
    } catch (error) {
        response.status(400).json({ error: error.toString() });
        return response.send();
    }
    return response.send(responseBody);
});

restServer.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});