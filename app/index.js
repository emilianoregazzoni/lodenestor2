const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const todoListRouterNew = require('./pages/to-do-list-new');
const newCompanyRouter = require('./pages/new-company');
const viewCompanyRouter = require('./pages/view-companies');
const loginRouter = require('./pages/lodenestor');
const viewProductsRouter =  require('./pages/view-products');
const viewUsersRouter = require('./pages/view-users');
const viewSalesRouter = require('./pages/view-sales');
const newUserRouter = require('./pages/new-user');


const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/to-do-list-new', todoListRouterNew) ;
//router.use('/company', routerCompany);
router.use('/new-company', newCompanyRouter);
router.use('/view-companies', viewCompanyRouter);
router.use('/login',loginRouter);

router.use('/view-products',viewProductsRouter);
router.use('/view-users',viewUsersRouter);
router.use('/view-sales',viewSalesRouter);
router.use('/new-user',newUserRouter);


router.use(appErrorHandler);

module.exports = router;