import React from 'react';

class NavComponent extends React.Component{
    logout() {
        this.context.history.push('/logout');
    }
    render () {
        return (
            <div className=" navbardiv">
                <nav className="navbar navbarr justify-content-end navbar-expand-lg">
                    <button className="btn btn-default logout" type="submit" onClick={this.logout(this)}> <b>Logout</b></button>
                </nav>
            </div>
        );
    
    }
}
export default NavComponent;