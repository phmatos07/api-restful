const mongoose = require('../../config/database');

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  passwords: {
    type: String,
    required: true,
    select: false
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const user = mongoose.model('User', UserModel);
module.exports = user;
