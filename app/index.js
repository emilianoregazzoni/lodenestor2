const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const todoListRouterNew = require('./pages/to-do-list-new');
const newCompanyRouter = require('./pages/new-company');
const viewCompanyRouter = require('./pages/view-companies');
const lodenestorRouter = require('./pages/lodenestor');



const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/to-do-list-new', todoListRouterNew) ;
//router.use('/company', routerCompany);
router.use('/new-company', newCompanyRouter);
router.use('/view-companies', viewCompanyRouter);
router.use('/lodenestor',lodenestorRouter);



router.use(appErrorHandler);

module.exports = router;