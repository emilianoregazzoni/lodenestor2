const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const User = require('../../../models/user');
const View = require('./view');

router.get('/', (req, res, next) => { 
    
        const initialState = {
        };

        const content = renderToString(<View initialState={initialState}/>);

        res.render('template', {
          pageName: 'new-user',
          pageTitle: 'New user',
          initialState,
          content
        });
});


module.exports = router;