const router = require('express').Router();
const Product = require('../../models/product');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Product.getProductById(req.params.id)
        .then(product => {
            res.json({
                product,
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

router.post('/', (req, res, next) => {
    console.log(req.body);
    const product = new Product(null, req.body.description, req.body.image, req.body.name);

    product.save().then(product => {
        res.json({
            product,
        });
    }).catch(err => {
        next(err);
    });
});

module.exports = router;