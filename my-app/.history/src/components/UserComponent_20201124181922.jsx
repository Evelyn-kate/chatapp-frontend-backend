import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class UserComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password: '',
            items: []
        }
                         
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        let items = [...this.state.items];
        items.push({ username: this.state.username, email: this.state.email, password: this.state.password });

        this.setState({
            items,
            username: '',
            email: '',
            password: ''
        });
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };


    render() {
        return (
            <div className="App">
                <tbody handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} newUsername={this.state.username} newEmail={this.state.email} newPassword={this.state.password} />
                <table items={this.state.items} />
            </div>
        );
    }



    render() {
        const { username } = this.props.match.params;
        console.log(username);
        const items = this.props.items;
        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-3">
                            <div>
                                <SideComponent />
                            </div>
                        </div>

                        <div className="col-9 pr-0">
                            {/*navbar component*/}
                            <NavComponent history={this.props.history} />


                            <div className="container">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <caption> Users list</caption>
                                        <hr />
                                    </div>

                                    <div className="panel-body">

                                        <table className="table table-bordered" id="example">
                                            <thead>
                                                <tr>
                                                    <th>User Name</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Action Button</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.items.map(item => {
                                                    return (
                                                        <tr>
                                                            <td>{item.username}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.password}</td>
                                                            <td>
                                                                <div className="row">
                                                                    <div className="col-6" >
                                                                        <button className="btn btn-success" type="button"
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                window.location.href = "http://localhost:3000/users/add";
                                                                            }}>Add</button>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <button className="btn btn-sm btn-warning">Block</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    );

                                                })}

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserComponent;