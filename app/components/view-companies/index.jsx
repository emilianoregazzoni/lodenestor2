const React = require('react');
const Company = require('../view-companies');


class ViewCompany extends React.Component {
  render() {

    const { companies } = this.props;

    return (
      <ul className="view-companies">
      {
        companies.map(company => (
          <Company key={company.id} id={company.id} name={company.name} direction={company.direction} />
        ))
      }
    </ul>
    );
  }
};

module.exports = ViewCompany;