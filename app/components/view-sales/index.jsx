const React = require('react');
const {Link} = require ('react-router-dom');
const Sale = require('../sale');

class ViewSale extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sales: null,
        loading: true,
        error: false,
    };
}

  componentDidMount() {
    fetch(`/api/sale/`)
        .then(res => res.json()).then((data) =>{
            console.log(data.sales);
        this.setState({
            sales: data.sales,
            loading: false,
            error: false,
        });
    })
        .catch((err) => {
            console.error(err);
            this.setState({
                sales: null,
                loading: false,
                error: true,
            });
        });
}

render() {

    const sales  = this.state.sales;
    if (this.state.loading) {
        return (<div>Cargando ventas...</div>);
    }
    return (
        <div>
            <h1>Ventas cargadas</h1>
          
            <ul className="view-sales">
                {
                    sales.map(sale => (
                        <Sale key={sale.idSale} idSale={sale.idSale} date={sale.date} idCompany={sale.idCompany}
                        amout={sale.amout} charge={sale.charge}/>
                    ))
                }
            </ul>
        </div>
    );
}
};

module.exports = ViewSale;