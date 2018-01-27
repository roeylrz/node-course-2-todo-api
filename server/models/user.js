const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema( {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: { //validate - http://mongoosejs.com/docs/validation.html 
            validator: validator.isEmail,//validator: https://www.npmjs.com/package/validator
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});
//UserSchema.methods  = To create instance methods
//That converts our object to a string by calling JSON.stringify. 
//JSON.stringify is what calls toJSON
UserSchema.methods.toJSON = function() { //Controls wat we want to send back when when mongoose model converted to json value
    var user = this;
    var userObject = user.toObject(); //taking the mongoose variable, user, and converting it into a reguler object when only the properties aviable in the document exists 

    return _.pick(userObject, ['_id', 'email']);
};
UserSchema.methods.generateAuthToken = function() {
    var user = this; //We are not using arrow function in order to use 'THIS' 
                    //this reffers to the document that the function was called from and will alias it to the name 'user'
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};
