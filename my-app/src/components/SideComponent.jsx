import React from 'react';

import { connect } from 'react-redux';
import image from '../images/User.png';

class SideComponent extends React.Component {

    isAdmin(){
        const role = this.props.profile.roles[0];

        if(role === 'ROLE_ADMIN')
            return true;

        return false;
    }

    render() {
        return (
            <nav id="sidebar" >
                <div className="sidebar-header">
                    {/*<div className="image-container">
                        <img src={image} alt="Avatar" className="avatar" />
                    </div>*/}
                    <div className="">
                        <div  className="row">
                            <img src={image} alt="Avatar" className="avatar col-lg-3 col-md-3" />
                            <h4 className="col-lg-9 col-md-9">Welcome, {this.props.profile.username}!</h4>
                        </div>
                    </div> 
                </div>
                
                <div className = "users sidebar-bottom" style={{backgroundColor: "cornflowerblue ", color:"white"}}>
                    <ul className="list-unstyled components">
                            <li>
                                <a href="home"><i className="fa fa-home" aria-hidden="true"></i>      Home
                                 </a>
                            </li>

                            <li>
                                <a href="messages"><i className="fa fa-envelope-o" aria-hidden="true"></i>     Messages
                                </a>
                            </li>

                            {this.isAdmin() ?
                                <li>
                                    <a href="users"><i className="fa fa-users" aria-hidden="true"></i>     Users</a>
                                </li>
                            : null }

                            <li>
                                <a href="settings"><i className="fa fa-cog" aria-hidden="true"></i>     Settings</a>
                            </li>
                        </ul>
                </div>
            </nav>
        );


    }

}


const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(SideComponent);
