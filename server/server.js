const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then(doc => {
    res.send(doc);
  }).catch(err => {
    res.status(400).send(err);
  })
});

app.get('/todos', (req, res) => {
  Todo.find({}).then(todos => {
    res.status(200).send({ todos });
  }).catch(err => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) { // invalid Id (not found)
    return res.status(404).send();
  }

  Todo.findById(id).then(todo => {
    if (!todo) {
      res.status(404).send();
    }

    return res.status(200).send({todo});
  }).catch(err => { // bad request
    res.status(400).send();
  });
});

app.delete('/todos/:id' , (req , res) => {
  var id  =  req.params.id;

  if (!ObjectID.isValid(id)) { // invalid Id (not found)
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then(doc => {
    if(!doc){
      res.status(404).send();
    }
    return res.status(200).send(doc);
  }).catch(err => {
    res.status(400).send('');
  });
});

app.listen(port, () => {
  console.log(`You are being served on port ${port}`);
});

module.exports = { app };