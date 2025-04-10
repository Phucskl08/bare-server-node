const { createBareServer } = require('@tomphttp/bare-server-node');
const http = require('http');

const bare = createBareServer('/');

const server = http.createServer((req, res) => {
  bare(req, res);
});

server.on('upgrade', (req, socket, head) => {
  bare.handleUpgrade(req, socket, head);
});

module.exports = (req, res) => {
  server.emit('request', req, res);
};