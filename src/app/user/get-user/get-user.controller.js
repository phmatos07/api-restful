const CreateObjectError = require('./../../../helpers/create-object-error/create-object-error.helper');
const TypeErrorsEnum = require('./../../../models/enum/type-errors.enum');
const TesponsesStatusEnum = require('./../../../models/enum/responses-status.enum');

const GetUserController = (req, res, next) => {

  try {
    // Em desenvolvimento
    // res.send('Teste');
    throw CreateObjectError(
      TypeErrorsEnum.XML_HTTP_REQUEST,
      TesponsesStatusEnum.NOT_FOUND,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    );

  } catch (error) {
    return next(error);
  }
};

module.exports = GetUserController;
