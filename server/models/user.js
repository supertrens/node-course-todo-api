const mongoose = require('mongoose');

const schema = {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
};
const User = mongoose.model('User', schema);

module.exports = { User };