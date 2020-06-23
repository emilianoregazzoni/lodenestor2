const router = require('express').Router();
const React = require('react');
const { renderToString } = require('react-dom/server');
const View = require('./view');


router.get('/', (req, res, next) => {

  const initialState = {}; // obligatorio

        const content = renderToString(<View initialState={initialState}/>);

        res.render('template', {
          pageName: 'lodenestor',
          pageTitle: 'Bienvenido a lo de Nestor',
          initialState,
          content
        });
      })



module.exports = router;