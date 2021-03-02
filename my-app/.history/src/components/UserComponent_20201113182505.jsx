import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class UserComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            items: []
        }
    };


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
                                        <h3> Users list</h3>
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
                                                {items.map(item => {
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
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