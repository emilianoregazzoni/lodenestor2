const React = require('react');
const ReactDOM = require('react-dom');
const ViewCompaniesPage = require('../pages/new-company/view');
const styles = require('../pages/new-company/style.scss');
const { BrowserRouter } = require('react-router-dom');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<ViewCompaniesPage initialState={initialState}/>, document.getElementById('app'));