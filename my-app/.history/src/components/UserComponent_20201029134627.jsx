import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';



class UserComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    render(){
        const {username} = this.props.match.params;
        console.log(username);
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
                            <div className="container" style= {{width: 50%}}>
                                {/*navbar component*/}
                                <div>
                                    <NavComponent />
                                </div>
                                <div className="table-responsive">
                                    <table className=" table-bordered">
                                        <thead>
                                            <tr>
                                                <th>User Name</th>
                                                <th>Email</th>
                                                <th>Action Button</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>john@example.com</td>
                                                <td>
                                                    <button type="button" class="btn btn-info">Add</button>
                                                    <button type="button" class="btn btn-warning">Block</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>mary@example.com</td>
                                                <td>
                                                    <button type="button" class="btn btn-info">Add</button>
                                                    <button type="button" class="btn btn-warning">Block</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>july@example.com</td>
                                                <td>
                                                    <button type="button" class="btn btn-info">Add</button>
                                                    <button type="button" class="btn btn-warning">Block</button>
                                                </td>
                                            </tr>
                                        </tbody>        
                                    </table>
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