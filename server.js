const express = require('express');
const cors = require('cors');

const actionRouter = require('./actions/actionRouter.js');
const projectRouter = require('./projects/projectRouter.js');

const server = express();

//middlewares

server.use(express.json());
server.use(cors);
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

const port = 5000;
server.listen(port, () => console.log('RUN FOREST RUN on port 5000'));
