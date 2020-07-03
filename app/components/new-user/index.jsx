const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');

class NewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            company: '',
            redirect: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/user', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description
            })
        }).then(res => res.json()).then((data) =>{

            this.setState({
                redirect: true
            });

        }).catch((err) => {
            alert('Ocurrio un error');
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/to-do-list/" />
        }
        return (
            <div>
                <h2 className="red-text">Crear nuevo usuario</h2>
          
                <form onSubmit={this.handleSubmit}>
                    <div>
                        User:
                        <input type="text" name="user" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        Password:
                        <input type="text" name="password" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div>
                        Company:
                        <input type="text" name="company" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <br></br>
                    <input type="submit" value="Crear" />
                </form>
            </div>
        );
    }
};

module.exports = NewUser;
