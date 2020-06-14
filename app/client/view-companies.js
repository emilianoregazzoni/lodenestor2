const React = require('react');
const ReactDOM = require('react-dom');
const ViewCompanyPage = require('../pages/view-companies/view');
const styles = require('../pages/view-companies/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<ViewCompanyPage initialState={initialState}/>, document.getElementById('app'));