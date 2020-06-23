const React = require('react');
const { Route } = require('react-router-dom');
const {ViewCompany} = require('../../components/view-companies');

class ViewCompaniesPage extends React.Component {
  
        render() {
            const { companies } = this.props.initialState;
            return (
                <React.Fragment>
                    <Route
                        exact
                        path="/view-companies"
                        render={(props) => <ViewCompany {...props} companies={companies}/>}
                    />
                </React.Fragment>
            );
        }
    };
    
    module.exports = ViewCompaniesPage;