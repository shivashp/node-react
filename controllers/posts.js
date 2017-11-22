const Post = require('../models/posts');
const userController = require('./users');

const getAllPosts = () => new Promise((resolve, reject) => {
    Post.find({}).populate('author', '_id name').exec((err, data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
});

const getSinglePost = (id) => new Promise((resolve, reject) => {
    Post.findById(id, (err, post) => {
        if(!err) {
            resolve(post);
        } else {
            reject(err);
        }
    })
});


const addPost = (postData) => new Promise((resolve, reject) => {
    let post = new Post(postData);
    post.save(err => {
        if(!err) {
            // userController.getSingleUser(post.author)
            // .then(user => {
            //     user.posts.push({"post": post._id});
            //     user.save(err => {
            //         if(err) {
            //             reject(err);
            //         } else {
            //             resolve(post);
            //         }
            //     });
            // })
            // .catch(err => reject(err));
            userController.updateUser(post.author, {posts: [{"_id": post._id}]})
            resolve(post);
        } else {
            reject(err);
        }
    })
});

module.exports = {
    addPost, getAllPosts, getSinglePost
}