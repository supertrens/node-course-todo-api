const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  // deleteMany
  db.collection('Todos').deleteMany({ text: 'Go to the gym' })
    .then(result => {
      console.log(result);
    });
  //deleteOne
  db.collection('Todos').deleteOne({ text: 'Learn Node' })
  .then(result => {
    console.log(result);
  });

  //findOneDelete
  db.collection('Todos').findOneDelete({ text: 'Learn Node' })
  .then(result => {
    console.log(result);
  });

  client.close();
})