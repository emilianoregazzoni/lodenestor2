const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.id}: {this.props.description}</h2>
        <p>{this.props.image}</p>
        <p>{this.props.name}</p>
      </li>
    );
  }
};

module.exports = Product;