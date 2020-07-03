const React = require('react');
const { Route } = require('react-router-dom');
const ViewProduct = require('../../components/view-products');
const NewProduct = require('../../components/new-product');

class ViewProductsPage extends React.Component {
  
        render() {
            const { products } = this.props.initialState;
            return (
                <React.Fragment>
                    <Route
                        exact
                        path="/view-products"
                        render={(props) => <ViewProduct {...props} products={products}/>}
                    />
                    <Route
                    exact
                    path="/view-products/new"
                    render={(props) => <NewProduct {...props} products={products}/>}
                />
                </React.Fragment>
            );
        }
    };
    
    module.exports = ViewProductsPage;