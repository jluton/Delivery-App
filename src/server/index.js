const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static(`${__dirname}/../client`));

// TODO: Write request handler for a GET request to /orders

// TODO: Write request handler for a POST request to /orders

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));