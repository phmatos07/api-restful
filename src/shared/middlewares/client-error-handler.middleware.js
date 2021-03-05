const TypeErrorsEnum = require('./../enum/type-errors.enum');

const ClientErrorHandlerMiddleware = (err, req, res, next) => {
  try {

    if (err.typeError === TypeErrorsEnum.XML_HTTP_REQUEST) {
      throw err;
    }
    next(err);

  } catch (error) {
    console.error(error);
    res.status(error.httpStatusCode);
    res.send(error);
  }
};

module.exports = ClientErrorHandlerMiddleware;
