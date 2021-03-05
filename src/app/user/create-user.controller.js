const UserModel = require('./model/user.model');

const CreateUserController = async (req, res) => {
  try {

    const user = new UserModel({
      name: 'PH',
      email: 'phelipe.matos07@gmail.com',
      passwords: '91397598'
    });
    user.save((err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });

    res.send('Cadastro OK');

  } catch (error) {

    return res.status(400).send({
      error: 'Registro falhou!'
    });
  }
};

module.exports = CreateUserController;
