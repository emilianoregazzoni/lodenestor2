const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const ViewCompaniesPage = require('../pages/view-companies/view');
const styles = require('../pages/to-do-list/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ViewCompaniesPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
