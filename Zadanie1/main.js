const express = require('express');

const port = 8000;
const restServer = express();

restServer.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});