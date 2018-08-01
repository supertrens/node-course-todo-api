const mongoose = require('mongoose');

// export MONGOLAB_URI = "mongodb://username:password@ds01316.mlab.com:1316/food"

// to tell mongoose which promise library to use
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/TodoApp');


module.exports = { mongoose };