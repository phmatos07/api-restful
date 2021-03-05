const mongoose = require('mongoose');

const UserModel = mongoose.model('User', new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now
  }
}));

module.exports = UserModel;
