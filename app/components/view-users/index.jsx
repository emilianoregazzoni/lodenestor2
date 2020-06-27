const React = require('react');
const User = require('../user');
const {Link} = require ('react-router-dom');

class ViewUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: true,
            error: false,
        };
    }

    componentDidMount() {
        fetch(`/api/user/`)
            .then(res => res.json()).then((data) =>{
                console.log(data.users);
            this.setState({
                users: data.users,
                loading: false,
                error: false,
            });
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    users: null,
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        const users  = this.state.users;
        if (this.state.loading) {
            return (<div>Cargando Usuarios</div>)
        }
        return (
            <div>
                <h1>Listado de usuarios</h1>
                <ul className="view-users">
                    {
                        users.map(user => (
                            <User key={user.id} idUser={user.idUser} user={user.user} idCompany={user.idCompany} />
                        ))
                    }
                </ul>
            </div>
        );
    }
};

module.exports = ViewUsers;
