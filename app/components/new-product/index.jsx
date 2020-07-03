const React = require('react');
const {Link} = require ('react-router-dom');
const { Redirect } = require ('react-router-dom');
const { Button } = require ('semantic-ui-react');


class NewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            image: '',
            name: '',
            redirect: null
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleImageChange(event) {
        this.setState({
            image: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        });
    }
    

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/product', {
            method: 'POST',
            headers : { "Content-Type" : "application/json; charset=utf-8"},
            body: JSON.stringify({
                description: this.state.description,
                image: this.state.image,
                name: this.state.name
                
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
            return <Redirect to="/view-products" />
        }
        return (
            <div>
                <h2 className="red-text">Create product</h2>
                <Link to={`/view-products/`}>Ir al listado</Link>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        Description:
                        <input type="text" name="decription" value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div>
                        Image:
                        <input type="text" name="image" value={this.state.image} onChange={this.handleImageChange} />
                    </div>
                    <div>
                        Name:
                        <input type="text" name="name" value={this.state.name}  onChange={this.handleNameChange} />
                    </div>
                 <Button primary >Crear</Button>
                </form>
            </div>
        );
    }
};
module.exports = NewProduct;
