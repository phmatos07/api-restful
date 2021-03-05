const app = require('./app');
const dotenv = require('dotenv').config();
const NormalizePortHelper = require('./shared/helpers/normalize-port/normalize-port.helper');

try {

  if (dotenv.error) {
    throw dotenv.error;
  }

  // Liga e escuta as conexões no host e na porta especificados.
  app.listen(NormalizePortHelper(process.env.APP_PORT));

  if (process.env.STATUS_CONNECTION_INFO) {
    console.group('CONNECTED SERVER');
    console.info(`PORT: ${process.env.APP_PORT}`);
    console.groupEnd();
  }

} catch (error) {
  console.error(error);
}
