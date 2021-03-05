const CreateObjectError = require('./../../shared/helpers/create-object-error/create-object-error.helper');
const TypeErrorsEnum = require('./../../shared/enum/type-errors.enum');
const ResponsesStatusEnum = require('./../../shared/enum/responses-status.enum');

const GetUserController = (req, res, next) => {

  try {
    // Em desenvolvimento
    // res.send('Teste');
    throw CreateObjectError(
      TypeErrorsEnum.XML_HTTP_REQUEST,
      ResponsesStatusEnum.NOT_FOUND,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    );

  } catch (error) {
    return next(error);
  }
};

module.exports = GetUserController;
