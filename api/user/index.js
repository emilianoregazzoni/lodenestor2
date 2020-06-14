const router = require('express').Router();
const User = require('../../models/user');
//Handlers para los endpoints de la API de Ta

router.get('/:id', (req, res, next) => {
    User.getUserById(req.params.id)
        .then(user => {
            res.json({
                user,
            });
        })
        .catch(err => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    User.getAllUsers()
        .then(users => {
            res.json({
                users,
            });
        })
        .catch(err => {
            next(err);
        });
});




module.exports = router;