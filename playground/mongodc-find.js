//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb');//Distructure: The same as const MongoClient = require('mongodb').MongoClient - but we take out the value using Distructure
const {MongoClient, ObjectID} = require('mongodb');//Distructure. ObjectID - Constructore function that let us make new ObjectIDs on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //It will not create the database in Mongo until we add data to it (but it will connect)
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //Find() without values will bring us all the collection.
    //Find returns a MongoDB curser that is not the actual documents, 
    //but a pointer to the documents that have methods that we can use to get our documents
    //One of them is toArray() - db.collection('Todos').find().toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID("5a5fad15ccff2e64b39bf7cc")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })
    //Count()
    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log('Todos count:', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })
    db.collection('Users').find({name: 'Roey'}).toArray().then((docs)=> {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })

    //db.close();
});