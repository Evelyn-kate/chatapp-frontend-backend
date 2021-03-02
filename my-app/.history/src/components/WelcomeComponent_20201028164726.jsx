import React from 'react';
import NavComponent from './NavComponent';

class WelcomeComponent extends React.Component {
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
                        <div class="col-2">
                            <div class="sidebar">
                                <img src="/images/User_Avatar_2.png" alt="Avatar" className="avatar"/> 
                                <h1>Username</h1>
                                <h4>User@worldvoice.eu</h4>
                                <a href="#home"><i className="fa fa-fw fa-envelope"></i>Messages</a>
                                <a href="#clients"><i className="fa fa-fw fa-user"></i> Users</a>
                                <a href="#contact"><i className="fa fa-fw fa-cog"></i>Settings</a>
                            </div>
                        </div>
                        <div className="col-10 pr-0">
                            <div className="container">
                                {/*navbar component*/}
                                <div className="w-100 main-text">
                                    <h1>Welcome {username}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;