const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const Company = require('../../../models/company');
const View = require('./view');

router.get('/', (req, res, next) => {
    Company.getAllCompanies
      .then(company => {
        const initialState = {
          company,
        };
        
        const content = renderToString(<View initialState={initialState}/>);

        res.render('template', {
          pageName: 'view-companies',
          pageTitle: 'View companies',
          initialState,
          content
        });
      })
      .catch(err => {
        next(err);
      });
});

module.exports = router;