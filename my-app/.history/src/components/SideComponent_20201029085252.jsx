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
            <h1>UserName</h1>
            <h3> user@worldvoice.cm </h3>
        </div>

        <ul class="list-unstyled components">
            
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/welcome/username">Home 1</a>
                    </li>
                    <li>
                        <a href=" https://github.com">Home 2</a>
                    </li>
                    <li>
                        <a href=" https://github.com">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href=" https://github.com">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href=" https://github.com">Page 1</a>
                    </li>
                    <li>
                        <a href=" https://github.com">Page 2</a>
                    </li>
                    <li>
                        <a href=" https://github.com">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href=" https://github.com">Portfolio</a>
            </li>
            <li>
                <a href=" https://github.com">Contact</a>
            </li>
        </ul>
    </nav>




        );
       
    
    }
    
}
export default SideComponent;
