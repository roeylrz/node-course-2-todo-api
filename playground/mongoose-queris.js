const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a611611f04c0d4461dbd6b0';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find({ //Will bring us an array, even for one result
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));//Will happen only if the ID is not leagal (not if return nothing)
const userId = '5a603a4688eaed2821b29ec1';
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('----------------------------');
    console.log(JSON.stringify(user, undefined, 2))
    console.log('User: ', user);
    console.log('----------------------------');
}).catch((e) => { //Will happen only if the ID is not leagal (not if return nothing)
    console.log(e);
})
