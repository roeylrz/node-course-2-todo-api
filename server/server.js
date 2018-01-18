//We want the server only to handle our routs
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require ('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //Midleware to get the json body from the request

app.post('/todos', (req, res) => {//to set up a route
   var todo = new Todo({
       text: req.body.text
   })
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); //we are sending {todos} as an object and not todos as an array in order to let us edit the data
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Starten on port 3000');
});

module.exports = {app};
