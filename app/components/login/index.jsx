const React = require('react');
const {Link} = require ('react-router-dom');
const Login = require('../login');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sales: null,
        loading: true,
        error: false,
    };
}

  componentDidMount() {
    fetch(`/api/user/`)
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
        return (<div>Bienvenido</div>);
    }
    return (
        <div>
                <h1>Login</h1>
                <h2 className="red-text">Crear una nuevo usuario</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        user:
                        <input type="text" name="user" value={this.state.user} onChange={this.handleUserChange} />
                    </div>
                    <div>
                        password:
                        <input type="text" name="password" value={this.state.password} onChange={this.handleDescriptionChange}/>
                    </div>
                    <Button primary> Crear usuario</Button>
                </form>
              
            </div>
    );
}
};

module.exports = ViewSale;