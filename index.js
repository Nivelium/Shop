'use strict';

const config = require('./config.json');
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port: config.port });
server.path(__dirname + '/client');

server.start((err) => {

    if (err) {
    throw err;
}
console.log(`Server running at: ${server.info.uri}`);
});