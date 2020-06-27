const React = require('react');
const { Route } = require('react-router-dom');
const ViewSale = require ('../../components/view-sales')

class ViewSalesPage extends React.Component {
    render() {
        const { sales } = this.props.initialState;
        return (
            <React.Fragment>          
                <Route
                    exact
                    path="/view-sales"
                    render={(props) => <ViewSale {...props} sales={sales}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ViewSalesPage;
