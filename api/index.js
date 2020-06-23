const router = require('express').Router();
const taskRouter = require('./tasks');
const companyRouter = require ('./company');
const productRouter = require ('./product');
const saleRouter = require ('./sale');
const userRouter = require ('./user');
const viewCompaniesRouter = require ('./company');

const { apiErrorHandler } = require('../middlewares/error-handler');

router.use('/tasks', taskRouter);
router.use('/new-company', companyRouter);
router.use('/product', productRouter);
router.use('/sale', saleRouter);
router.use('/user', userRouter);
//router.use('/view-companies', viewCompaniesRouter);

router.use('/company', viewCompaniesRouter);


router.use(apiErrorHandler);

module.exports = router;