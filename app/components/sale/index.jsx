const React = require('react');

class Sale extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.idSale}: {this.props.date}</h2>
        <p>{this.props.idCompany}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.charge}</p>
      </li>
    );
  }
};

module.exports = Sale;