const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//Todo.remove({}) //remove multiple. is {} is empty it will remove everything

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove - with this we get the removed data, so we can do somthing with it.
//Todo.findByIdAndRemove - with this we get the removed data, so we can do somthing with it.
Todo.findByIdAndRemove('5a61fb8bccff2e64b39c3f47').then((todo) =>{
    console.log(todo);//Will give us the removed item
});
