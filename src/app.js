const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const app = express();

// MIDDLEWARES
const MongooseConnectMiddleware = require('./shared/middlewares/mongoose-connect.middleware');
const ClientErrorHandlerMiddleware = require('./shared/middlewares/client-error-handler.middleware');
const ErrorHandlerMiddleware = require('./shared/middlewares/error-handler.middleware');

// ROUTES
const userRoutes = require('./app/user/routes');

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());

// MIDDLEWARES
app.use(MongooseConnectMiddleware);

// APP-USE ROUTES
app.use('/', userRoutes);

// MIDDLEWARES ERROR'S
app.use(ClientErrorHandlerMiddleware);
app.use(ErrorHandlerMiddleware);

module.exports = app;
