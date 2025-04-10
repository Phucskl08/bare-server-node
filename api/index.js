const { createServer } = require('../createServer'); // hoặc đúng path file chính
const BareServer = require('../dist/BareServer').default;

const server = createServer({
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