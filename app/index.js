const router = require('express').Router();
const todoListRouter = require('./pages/to-do-list');
const todoListRouterNew = require('./pages/to-do-list-new');

const { appErrorHandler } = require('../middlewares/error-handler');

router.use('/to-do-list', todoListRouter);
router.use('/to-do-list-new', todoListRouterNew) ;

router.use(appErrorHandler);

module.exports = router;