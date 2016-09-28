'use strict';

const configuration = require('./config.json');
const Express = require('express');
const server = new Express();

server.use(Express.static(`${__dirname}//client`));

server.listen(configuration.port);

server.get('/', (req, res) => {
    res.send(200);
});