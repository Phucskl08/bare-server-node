const { createBareServer } = require('../dist/createServer');
const BareServer = require('../dist/BareServer').default;

const server = createBareServer({
  directory: '/bare/',
  logErrors: true,
  maintainer: 'Phucsk',
});

server.routes.set('/ping', async (req, res) => {
  return new Response('pong', { status: 200 });
});

module.exports = async (req, res) => {
  await server.routeRequest(req, res);
};