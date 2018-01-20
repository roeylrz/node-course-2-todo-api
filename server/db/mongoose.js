var mongoose = require('mongoose');

//Tell mongoose which Promise library we want to use. 
//Here we tell it that we want to use the built in one -
mongoose.Promise = global.Promise;
//Connect to database
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };