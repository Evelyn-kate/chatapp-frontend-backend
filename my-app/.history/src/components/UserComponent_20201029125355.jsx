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

                <div class="container-fluid">
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-9 pr-0">
                            <div className="container">
                                {/*navbar component*/}
                                <div>
                                    <NavComponent />
                                </div>
                                <div class="table-responsive">
                                    <table class=" table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Firstname</th>
                                                <th>Lastname</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>John</td>
                                                <td>Doe</td>
                                                <td>john@example.com</td>
                                            </tr>
                                            <tr>
                                                <td>Mary</td>
                                                <td>Moe</td>
                                                <td>mary@example.com</td>
                                            </tr>
                                            <tr>
                                                <td>July</td>
                                                <td>Dooley</td>
                                                <td>july@example.com</td>
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