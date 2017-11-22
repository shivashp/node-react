const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String, 
    body: String, 
    author: {type: Schema.ObjectId, ref:"User"},
    tags: {type: Array, default: ['uncategorized']},
    comments: [{body: String, author: {type: Schema.ObjectId, ref:'User'}}],
    likes: Number,
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

postSchema.pre('save', function(next) {
    let currentDate = Date.now();
    this.updated_at = currentDate;
    if(!this.created_at)
        this.created_at = currentDate;
    next();
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;




