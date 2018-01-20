require('./config/config');

const _ = require('lodash');
//We want the server only to handle our routs
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require ('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT;// || 3000;//For HEROKU. process.env.PORT will be set if its running on Heroku but not if its run locally - for that we use 3000

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

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => { //Will happen only if the ID is not leagal (not if return nothing)
        res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }   
    Todo.findByIdAndRemove(id).then((todo) =>{
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send(e);
    })
});

//PATCH - wht we use when we want to update a resource. there are other options as well
app.patch('/todos/:id', (req, res) => {
    //Using pick we can take only properties that we want to take from the client and 
    //not thing that we dont want to let the clients change    
    var body =_.pick(req.body, ['text', 'completed']); //here we take from the client only text and completed ad only if there exists
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }  

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime()
    } else {
        body.comleted = false;
        body.completedAt = null //If we want to remove a value from the database, we set it to null
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {//{$set: body} - $set takes a set of key value pairs and set them, {new: true} - Mongoose version to bring back the updated values from the database and not the original
    if (!todo) {
        return res.status(404).send();
    }
    res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
})


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
