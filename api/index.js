const path = require('path');
const createServer = require(path.join(__dirname, '../dist/createServer'));
const BareServer = require(path.join(__dirname, '../dist/BareServer')).default;

const server = createServer({
  directory: '/bare/',
  logErrors: true,
  maintainer: 'Phucsk',
});

server.routes.set('/ping', async (req, res) => {
  return new Response('pong', { status: 200 });
});

module.exports = async (req, res) => {
  try {
    await server.routeRequest(req, res);
  } catch (err) {
    console.error('Route error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};