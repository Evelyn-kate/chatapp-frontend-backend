import React from 'react';
import NavComponent from './NavComponent';
class WelcomeComponent extends React.Component {
    /*logout = () => {
        this.props.history.push('/logout');
    }*/
    render() {
        const { username } = this.props.match.params;
        console.log(username);
        return (
            <div class="wrapper" onSubmit={this.props.onSubmit}>

                <div class="container-fluid">
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3">
                            <div>
                                <nav id="sidebar">
                                    <div className="sidebar-header">
                                        <div>
                                            <img src="images/User.jpg" alt="Avatar" className="avatar" />
                                        </div>
                                        <br />
                                        <span>User Name</span>

                                    </div>

                                    <ul className="list-unstyled components">
                                        <li>
                                            <a href=" http://localhost:3000/welcome/username"><i className="fa fa-home" aria-hidden="true"></i>     Home </a>
                                        </li>

                                        <li>
                                            <a href=" http://localhost:3000/messages"><i className="fa fa-envelope-o" aria-hidden="true"></i>     Messages </a>
                                        </li>

                                        <li>
                                            <a href=" http://localhost:3000/settings"><i className="fa fa-cog" aria-hidden="true"></i>     Settings</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                        <div className="col-9 pr-0">
                            {/*navbar component*/}

                            <NavComponent history={this.props.history} />
                            <div className="container">
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <h3> Welcome</h3>
                                    </div>

                                    <div className="panel-body">
                                        <div className="main-text">
                                            <h1>Welcome {username}</h1>
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

export default WelcomeComponent;