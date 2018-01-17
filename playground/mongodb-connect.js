//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb');//Distructure: The same as const MongoClient = require('mongodb').MongoClient - but we take out the value using Distructure
const {MongoClient, ObjectID} = require('mongodb');//Distructure. ObjectID - Constructore function that let us make new ObjectIDs on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //It will not create the database in Mongo until we add data to it (but it will connect)
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     test: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //        return console.log('Ubable to insert todo', err) ;
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))//result.ops - All the documents that were inserted.
    // })
    // db.collection('Users').insertOne({
    //     name: 'Roey',
    //     age: 35,
    //     location: 'Rosh Haayin'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))//result.ops - All the documents that were inserted.
    // })

    db.close();
});