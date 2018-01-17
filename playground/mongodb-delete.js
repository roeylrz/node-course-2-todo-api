const {MongoClient, ObjectID} = require('mongodb');//Distructure. ObjectID - Constructore function that let us make new ObjectIDs on the fly


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //It will not create the database in Mongo until we add data to it (but it will connect)
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // //delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //find one and delete in order to get the data back as well as deleting it
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    //db.close();
});