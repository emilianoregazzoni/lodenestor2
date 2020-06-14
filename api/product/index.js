const router = require('express').Router();
const Product = require('../../models/product');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Product.getProductById(req.params.id)
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
    Product.getAllProducts()
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