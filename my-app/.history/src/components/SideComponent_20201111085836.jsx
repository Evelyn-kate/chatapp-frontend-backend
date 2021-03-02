import React from 'react';

class SideComponent extends React.Component {
    render() {
        return (
            /*             <div class="sidebar">
                        <img src="/images/User_Avatar_2.png" alt="Avatar" className="avatar"/> 
                        <h1>Username</h1>
                        <h4>User@worldvoice.eu</h4>
                        <a href="#home"><i className="fa fa-fw fa-envelope"></i>Messages</a>
                        <a href="#clients"><i className="fa fa-fw fa-user"></i> Users</a>
                        <a href="#contact"><i className="fa fa-fw fa-cog"></i>Settings</a>
                     </div>*/


            <nav id="sidebar">
                <div className="sidebar-header">
                    <div>
                        <img src="images/User.jpg" alt="Avatar" className="avatar" />
                    </div>
                    <br />
                    <span>User Name</span>

                </div>

                <ul class="list-unstyled components">
                    <li>

                        <a href=" http://localhost:3000/welcome/username">
                            <i className="fa fa-home" aria-hidden="true"></i>     Home
                         </a>
                    </li>

                    <li>

                        <a href=" http://localhost:3000/messages">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>     Messages
                </a>
                    </li>

                    <li>
                        <a href=" http://localhost:3000/users"><i className="fa fa-users" aria-hidden="true"></i>     Users</a>
                    </li>
                    <li>
                        <a href=" http://localhost:3000/settings"><i className="fa fa-cog" aria-hidden="true"></i>     Settings</a>
                    </li>
                </ul>
            </nav>




        );


    }

}
export default SideComponent;
