const {MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,{ useNewUrlParser: true }, (err , client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name : 'Pitrens',
    age: 27,
    location: 'Tainan city',
  } , (err , result) =>{
    if(err){
      return console.log('Unable to inset todo', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined , 2));
  });


  client.close();
})