import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';
import axios from 'axios';
import { Button } from 'reactstrap';

import { apiGetAllUsers, apiUpdateStatus } from '../api/index';

class UserComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            switched: false,
            user:{
                username: '',
                email: '',
                password: '',
                items: [],
            },
        }
        this.updateStatus = this.updateStatus.bind(this);
        
    };

    componentDidMount() {
        apiGetAllUsers() // where the api gets fetched from that API
            .then(res => {
                console.log(res.data);
                this.setState({ items: res.data.users });
            });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        let items = [...this.state.items];
        items.push({ username: this.state.username, email: this.state.email, password: this.state.password });

        this.setState({
            items: '',
            users: '',
            username: '',
            email: '',
            password: '',
            
        });
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let items = input.items;

        this.setState({
            [name]: items
        })
    };


    renderItem() {
        return (
            <div className="App">
                <tbody handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} newUsername={this.state.username} newEmail={this.state.email} newPassword={this.state.password} />
                <table items={this.state.items} />
            </div>
        );
    }
   
    updateStatus(userId, status){
        apiUpdateStatus(userId, status)
            .then(res => {
                let allUsers = [];
                this.state.items.forEach(usr => {
                    if(usr.idUsers === userId){
                        allUsers.push({
                            ...usr,
                            isActive: status
                        });
                    }else{
                        allUsers.push(usr);
                    }
                });

                this.setState({items: allUsers});
            })
            .catch(error => alert(error));
    }
        
    

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-md-2 col-lg-2 col-sm-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-10 col-lg-10 pl-2 contenu">
                            {/*navbar component*/}
                            <NavComponent history={this.props.history} />


                            <div className="container">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <h4> Users list</h4>
                                        <hr/>
                                    </div>

                                    <a className="btn btn-primary btn-xs pull-right w-25" href="add-user">Add</a>
                                    <br/>
                                    <br/>
                                    <div className="panel-body w-100 h-100">
                                       <div className="table-reponsive">
                                            <table className="table table-bordered " id="example">
                                                <thead>
                                                    <tr>
                                                        <th>User Name</th>
                                                        <th>Email</th>
                                                        <th>Action Button</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.items && this.state.items.map(item => {
                                                        return (
                                                            <tr key={item.idUsers}>
                                                                <td>{item.name}</td>
                                                                <td>{item.email}</td>
                                                                <td>
                                                                    <div className={item.isActive ? 'unblocked' : 'blocked'}>
                                                                        <Button outline color="secondary" onClick={() => this.updateStatus(item.idUsers, !item.isActive)}>
                                                                            {item.isActive ? 'Block' : 'Unblock'}
                                                                        </Button>
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
            </div>
        );
    }
}

export default UserComponent;

