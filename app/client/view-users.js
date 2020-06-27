const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const ViewUserPage = require('../pages/view-users/view');
const styles = require('../pages/view-users/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ViewUserPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
