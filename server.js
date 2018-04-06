const express = require('express');

//import routes

//middlewares

const server = express();

server.use(express.json());

const port = 5000;
server.listen(port, () => console.log('RUN FOREST RUN on port 5000'));
