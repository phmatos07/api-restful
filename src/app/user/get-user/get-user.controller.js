const createObjectError = require('./../../../helpers/create-object-error/create-object-error.helper');
const typeErrorsEnum = require('./../../../models/enum/type-errors.enum');
const tesponsesStatusEnum = require('./../../../models/enum/responses-status.enum');

const GetUserController = (req, res, next) => {

  try {
    // Em desenvolvimento
    // res.send('Teste');
    throw createObjectError(
      typeErrorsEnum.XML_HTTP_REQUEST,
      tesponsesStatusEnum.NOT_FOUND,
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    );

  } catch (error) {
    return next(error);
  }
};

module.exports = GetUserController;
