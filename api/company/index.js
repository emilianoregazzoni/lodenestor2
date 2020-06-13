const router = require('express').Router();
const Company = require('../../models/company');
//Handlers para los endpoints de la API de Tasks

router.get('/:id', (req, res, next) => {
    Company.getCompanyById(req.params.id)
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
    Company.getAllCompanies()
        .then(companies => {
            res.json({
                companies,
            });
        })
        .catch(err => {
            next(err);
        });
});

module.exports = router;