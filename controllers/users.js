const User = require('../models/users');

const getUsers = () => new Promise((resolve, reject) => {
    User.find({}).populate('posts.post', '_id title').exec((err, user) => {
        err && reject(err) || resolve(user);
    })
}); 
 
const getSingleUser = (id) => new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
        err && reject(err) || resolve(user);
    })
})

const addUser = (obj) => new Promise((resolve, reject) => {
    let user = new User(obj);
    user.save((err, data) => {
        if(err) {
            reject(err);
        } else {
            resolve(data);
        }
    })
});

const updateUser = (id, obj) => new Promise((resolve, reject) => {
    getSingleUser(id)
    .then(user => {
        user = Object.assign(user, obj);
        user.save(err => {
            if(err) {
                reject(err);
            } else {
                resolve(user);
            }
        })
    })
})

const userExists = (username) => {
    User.findOne({username: username}, (err, user) => {
        if(err) 
            return 0;
        return user;
    })
}

module.exports = {
    getUsers, addUser, getSingleUser, updateUser
}