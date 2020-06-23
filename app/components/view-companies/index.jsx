const React = require('react');
const Company = require('../view-companies');
const {Link} = require ('react-router-dom');

class ViewCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        companies: null,
        loading: true,
        error: false,
    };
}

  componentDidMount() {
    fetch(`/api/company/`)
        .then(res => res.json()).then((data) =>{
            console.log(data.companies);
        this.setState({
            companies: data.companies,
            loading: false,
            error: false,
        });
    })
        .catch((err) => {
            console.error(err);
            this.setState({
                companies: null,
                loading: false,
                error: true,
            });
        });
}

render() {

    const companies  = this.state.companies;
    if (this.state.loading) {
        return (<div>Cargando compañías...</div>);
    }
    return (
        <div>
            <h1>Compañías cargadas</h1>
           
            <ul className="view-companies">
                {
                    companies.map(company => (
                        <Company key={company.id} id={company.id} rut={company.rut} direction={company.direction} name={company.name} />
                    ))
                }
            </ul>
        </div>
    );
}
};

module.exports = ViewCompany;