const CreateObjectErrorHelper = (typeErrors, statusCode, message) => {

  const error = new Error();
  error.typeError = typeErrors;
  error.httpStatusCode = statusCode;
  error.message = message;
  return error;
};

module.exports = CreateObjectErrorHelper;
