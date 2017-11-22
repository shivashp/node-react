const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./posts');

let userSchema = new Schema({
    name: String, 
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    posts: [{"post": {type: Schema.ObjectId, ref:'Post'}}]
});


let User = mongoose.model('User', userSchema);

module.exports = User