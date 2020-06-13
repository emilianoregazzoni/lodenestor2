const router = require('express').Router();
const taskRouter = require('./tasks');
const companyRouter = require ('./company');
const productRouter = require ('./product');
const saleRouter = require ('./sale');
const userRouter = require ('./user');

const { apiErrorHandler } = require('../middlewares/error-handler');

router.use('/tasks', taskRouter);
router.use('/companies', companyRouter);
router.use('/product', companyRouter);
router.use('/sale', companyRouter);
router.use('/user', companyRouter);


router.use(apiErrorHandler);

module.exports = router;