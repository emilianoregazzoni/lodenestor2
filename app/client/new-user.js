const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const NewUserPage = require('../pages/new-user/view');
const styles = require('../pages/new-user/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <NewUserPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
