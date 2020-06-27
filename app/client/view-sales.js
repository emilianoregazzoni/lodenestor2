const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const ViewSalesPage = require('../pages/view-sales/view');
const styles = require('../pages/view-sales/style.scss');

const initialState = JSON.parse(window.__STATE__);

delete window.__STATE__;

ReactDOM/ReactDOM.hydrate(
    <BrowserRouter>
        <ViewSalesPage initialState={initialState}/>
    </BrowserRouter>,
    document.getElementById('app')
);
