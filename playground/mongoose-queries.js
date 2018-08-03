const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
// const {User} = require('./../server/models/user');

const id = '5b5a9dda8ead63970f45e28dd9';

if(!ObjectID.isValid(id)){
  console.log('Your Id is not valid');
}

// Todo.find({
//   _id: id,
// }).then(todos => {
//   console.log(todos);
// });

// Todo.findOne({
//   _id: id,
// }).then(todo => {
//   console.log(todo);
// });

Todo.findById(id).then(todo => {
  console.log(todo);
}).catch(e => {
  console.log(e);
});