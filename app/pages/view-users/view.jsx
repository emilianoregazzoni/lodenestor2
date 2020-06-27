const React = require('react');
const { Route } = require('react-router-dom');
const ViewUser = require ('../../components/view-users')

class ViewUsersPage extends React.Component {
    render() {
        const { users } = this.props.initialState;
        return (
            <React.Fragment>          
                <Route
                    exact
                    path="/view-users"
                    render={(props) => <ViewUser {...props} users={users}/>}
                />
            </React.Fragment>
        );
    }
};

module.exports = ViewUsersPage;
