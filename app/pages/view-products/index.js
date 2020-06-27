const router = require('express').Router();
const React = require('react');
const {StaticRouter} = require('react-router-dom');
const { renderToString } = require('react-dom/server');
const View = require('./view');


router.get('/*', (req, res, next) => {
  const initialState = {};
  const context = {};

  const content = renderToString(
      <StaticRouter location={req.url} context={context}>
          <View initialState={initialState}/>
      </StaticRouter>
  );

  res.render('template', {
    pageName: 'view-products',
    pageTitle: 'Products',
    host: 'http://localhost:8080',
    initialState,
    content
});
});

module.exports = router;
