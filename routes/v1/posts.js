const router = require('express').Router();
const postController = require('../../controllers/posts');

router.get('/', (req, res) => {
    postController.getAllPosts()
    .then(posts => res.send({"status": "success", "data": posts}))
    .catch(err => res.send({"status": "failed", "error": err}));
});

router.post('/', (req, res) => {
    let postData = req.body;
    postController.addPost(postData)
    .then(post => res.send({"status": "success", "data": post}))
    .catch(err => res.send({"status": "failed", "error": err}))
});

router.get('/:id', (req, res) => {
    postController.getSinglePost(req.params.id)
    .then(post => res.send({"status": "success", "data": post}))
    .catch(err => res.send({"status": "failed", "error": err}))
});

module.exports = router;