//We will use encripting and hashing algorithem called: sha 256
//In order to use it we new to install: npm i crypto-js@3.1.6 --save
//then we will store the hashed password in the database.
//every hashing we set the same result, so we can alwais hash the input password
//and compare it to the hashed password in the database
const{SHA256} = require ('crypto-js');
// We will get two functions:
// 1. To create the token
// 2. To verify the token
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc'); //'123abc' - the salting
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
//------------------------------------------
//Next is the concept called JSON WEB TOKEN. 
//an exmple to the library - JWT:
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// console.log(message);
// console.log(hash);

// var data = {
//     id: 4
// };
// var token = {// //this is what we will send to the client
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString() //SOLTING the hash WITH SOMESECRET (for example): We will 'SOLT' the hash, meaning that we will add somthing to the hash that is uniueq and changes the value
// }

// //This will make the an alert (because of the salt):
// // token.data.id = 5;
// // token.hash =  SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Don not trust!!!');
//}
//------------------------------------------
