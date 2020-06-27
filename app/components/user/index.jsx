const React = require('react');

class User extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.id}: {this.props.idProfile}</h2>
        <p>{this.props.user}</p>
        <p>{this.props.idCompany}</p>
      </li>
    );
  }
};

module.exports = User;