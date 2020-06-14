const React = require('react');
const ViewCompanies = require('../../components/view-companies');

class ViewCompaniesPage extends React.Component {
    render() {
        const { company } = this.props.initialState;
        return (<ViewCompanies company={company}/>);
    }
};

module.exports = ViewCompaniesPage;
