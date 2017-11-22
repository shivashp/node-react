const router = require('express').Router();
const userController = require('../../controllers/users');

router.get('/', (req, res) => {
    userController.getUsers().then(users => {
        res.send({"status": "success", "data": users})
    }).catch(err => {
        res.send({"status": "failed", "error": err})
    });
});

router.post('/', (req, res) => {
    userController.addUser(req.body).then(user => {
        res.send({"status": "success", "user": user});
    }).catch(err => {
        res.send({"status": "failed", "error": err});
    })
});

router.get('/:id', (req, res) => {
    userController.getSingleUser(req.params.id).then(user => {
        res.send({"status": "success", "user": user});
    }).catch(err => {
        res.send({"status": "failed", "error": err});
    })
})


module.exports = router;