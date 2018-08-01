const mongoose = require('mongoose');

// I set it with this command
// export MONGOLAB_URI = "mongodb://username:password@ds01316.mlab.com:1316/food"

const remoteUrl = process.env.MONGOLAB_URI;

// to tell mongoose which promise library to use
mongoose.Promise = global.Promise;
mongoose.connect(remoteUrl || 'mongodb://localhost:27017/TodoApp');


module.exports = { mongoose };