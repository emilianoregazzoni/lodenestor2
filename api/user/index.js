const router = require('express').Router();
const User = require('../../models/user');
//Handlers para los endpoints de la API de Ta

router.get('/:id', (req, res, next) => {
    User.getUserById(req.params.id)
        .then(task => {
            res.json({
                task,
            });
        })
        .catch(err => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    User.getAllUsers()
        .then(products => {
            res.json({
                products,
            });
        })
        .catch(err => {
            next(err);
        });
});




module.exports = router;