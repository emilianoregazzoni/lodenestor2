const React = require('react');
const ReactDOM = require('react-dom');
const LoDeNestorPage = require('../pages/lodenestor/view');
const styles = require('../pages/lodenestor/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM.hydrate(<LoDeNestorPage initialState={initialState}/>, document.getElementById('app'));