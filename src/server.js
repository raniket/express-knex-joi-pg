
const http = require('http');
const app = require('./app');
const { createTerminus, HealthCheckError } = require('@godaddy/terminus');
const knex = require('./config/database');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

const cleanUp = async () => {
  try {
    console.log('server is starting cleanup...')
    console.log('closing db connection...');
    await knex.destroy();
    console.log('Bye 👋 👋 👋');
    process.exit(0);
  } catch (error) {
    console.log('error while cleaningup :', error);
    throw error;
  }
};

const healthCheck = async () => {
  // check app health.
};

const options = {
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': healthCheck,
  },
  onSignal: cleanUp
};

createTerminus(server, options);

server.listen(PORT, () => {
  console.log('server listening on port :: ', PORT);
});
