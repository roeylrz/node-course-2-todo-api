const mongoose = require('mongoose');
//Create a model for everything we want to store
//Here we create Todo model -
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true//Clean white spaces in the beginning and the end of the value
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};