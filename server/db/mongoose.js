const mongoose = require('mongoose');

// to tell mongoose which promise library to use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds259711.mlab.com:59711/andrew-todo-app-node' ||
  'mongodb://localhost:27017/TodoApp'
);

module.exports = { mongoose };