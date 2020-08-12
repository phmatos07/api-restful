const express = require('express');
const router = express.Router();
const user = require('./../../../models/user.model');

router.post('/register', async (req, res) => {
  try {

    const userModel = await user.create(req.body);
    return res.send(userModel);

  } catch (error) {

    return res.status(400).send({
      error: 'Registro falhou!'
    });
  }
});

module.exports = router;
