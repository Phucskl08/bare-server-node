const http = require('http');
const BareServer = require('../dist/BareServer').default;

const server = new BareServer('/bare/', {
  maintainer: 'mày',
  logErrors: true
});

// test route
server.routes.set('/ping', async (req, res) => {
  return new Response('pong', { status: 200 });
});

module.exports = (req, res) => {
  server.routeRequest(req, res);
};