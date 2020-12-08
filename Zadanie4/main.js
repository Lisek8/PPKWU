const express = require('express');
const bodyParser = require('body-parser');

const port = '8080';
const restServer = express();

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});