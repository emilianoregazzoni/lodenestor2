const React = require('react');
const {Link} = require ('react-router-dom');
const Product = require('../product');

class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: null,
        loading: true,
        error: false,
    };
}

  componentDidMount() {
    fetch(`/api/product/`)
        .then(res => res.json()).then((data) =>{
            console.log(data.products);
        this.setState({
            products: data.products,
            loading: false,
            error: false,
        });
    })
        .catch((err) => {
            console.error(err);
            this.setState({
                products: null,
                loading: false,
                error: true,
            });
        });
}

render() {

    const products  = this.state.products;
    if (this.state.loading) {
        return (<div>Cargando Productos...</div>);
    }
    return (
        <div>
            <h1>Productos cargados</h1>
          
            <ul className="view-products">
                {
                    products.map(product => (
                        <Product key={product.id} id={product.id} name={product.name} description={product.description} />
                    ))
                }
            </ul>
        </div>
    );
}
};

module.exports = ViewProduct;