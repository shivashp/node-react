const express = require('express');
const users = require('./users');
const posts = require('./posts');
const app = express();

app.use('/users', users);
app.use('/posts', posts);
app.use('*', (req, res) => {
    res.send("Invalide route in v1");
})

module.exports = app;