const mongoose = require('mongoose');
const DatabaseNameEnum = require('./../enum/database-name.enum');

const MongooseConnectMiddleware = (req, res, next) => {

  try {

    const connectDB = req && req.headers && req.headers.database || DatabaseNameEnum.MONGODB;

    if (connectDB === DatabaseNameEnum.MONGODB) {

      mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: process.env.USE_NEW_URL_PARSER,
        useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY,
        useCreateIndex: process.env.USE_CREATE_INDEX,
        autoIndex: process.env.AUTO_INDEX,
        poolSize: process.env.POOL_SIZE,
        serverSelectionTimeoutMS: process.env.SERVER_SELECTION_TIMEOUT_MS,
        socketTimeoutMS: process.env.SOCKET_TIMEOUT_MS,
      }).catch(error => {
        throw error;
      });

      mongoose.connection.on('error', error => {
        mongoose.disconnect(); // Fecha a conexão em qualquer erro
        throw error;
      });

      if (process.env.STATUS_CONNECTION_INFO) {
        mongoose.connection.on('connected', () => {
          console.group('CONNECTED DATABASE');
          console.info(`DB_HOST: ${process.env.DB_HOST}`);
          console.info(`DB_NAME: ${process.env.DB_NAME}`);
          console.groupEnd();
        });
      }
    }

    next();

  } catch (error) {
    console.error(error);
  }
};

module.exports = MongooseConnectMiddleware;
