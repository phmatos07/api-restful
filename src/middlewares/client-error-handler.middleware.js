const typeErrorsEnum = require('./../models/enum/type-errors.enum');

const clientErrorHandlerMiddleware = (err, req, res, next) => {
  try {

    if (err.typeError === typeErrorsEnum.XML_HTTP_REQUEST) {
      throw err;
    }
    next(err);

  } catch (error) {
    console.error(error);
    res.status(error.httpStatusCode);
    res.send(error);
  }
};

module.exports = clientErrorHandlerMiddleware;
