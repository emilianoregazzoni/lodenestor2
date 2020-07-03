const React = require('react');
const ReactDOM = require('react-dom');
const NewProductPage = require('../pages/new-product/view');
const styles = require('../pages/new-product/style.scss');
const { BrowserRouter } = require('react-router-dom');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<NewProductPage initialState={initialState}/>, document.getElementById('app'));