const React = require('react');

class Company extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.id}: {this.props.rut}</h2>
        <p>{this.props.direction}</p>
        <p>{this.props.name}</p>
        <p>{this.props.mail}</p>
      </li>
    );
  }
};

module.exports = Company;