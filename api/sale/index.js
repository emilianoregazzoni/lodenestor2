const router = require('express').Router();
const Sale = require('../../models/sale');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Sale.getSaleById(req.params.id)
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
    Sale.getAllSales()
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