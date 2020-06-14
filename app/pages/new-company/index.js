const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const View = require('./view');

router.get('/', (req, res, next) => { 
    
        const initialState = {};

        const content = renderToString(<View initialState={initialState}/>);
        
          res.render('template', {
          pageName: 'new-company',
          pageTitle: 'New company',
          initialState,
          content
        });
});


module.exports = router;