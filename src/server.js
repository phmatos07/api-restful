const app = require('./app');
const dotenv = require('dotenv').config();
const normalizePortHelper = require('./helpers/normalize-port/normalize-port.helper');

try {

  if (dotenv.error) {
    throw dotenv.error;
  }
  app.listen(normalizePortHelper(process.env.APP_PORT));
  console.info(dotenv.parsed);
  console.info(`SERVER OK - PORT: ${process.env.APP_PORT}`);

} catch (error) {
  console.error(error);
}
