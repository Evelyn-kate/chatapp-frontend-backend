import React from 'react';

class SideComponent extends React.Component{
    render () {
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
        <div class="sidebar-header">
            <img src="/images/User_Avatar_2.png" alt="Avatar" className="avatar"/> 
            <h3> user@worldvoice.cm </h3>
        </div>

        <ul class="list-unstyled components">
         
            <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <span><a href=" https://github.com">Messages</a></span>
            </li>

            <li>
                <a href=" https://github.com">Users</a>
            </li>
            <li>
                <a href=" https://github.com">Settings</a>
            </li>
        </ul>
    </nav>




        );
       
    
    }
    
}
export default SideComponent;
