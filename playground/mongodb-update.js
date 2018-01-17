//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb');//Distructure: The same as const MongoClient = require('mongodb').MongoClient - but we take out the value using Distructure
const {MongoClient, ObjectID} = require('mongodb');//Distructure. ObjectID - Constructore function that let us make new ObjectIDs on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //It will not create the database in Mongo until we add data to it (but it will connect)
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a5fb9d2ccff2e64b39bfff6')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false //if true (default) then it will return the original document (before changing)
    }).then ((result) => {
        console.log(result);
    })

    //db.close();
});