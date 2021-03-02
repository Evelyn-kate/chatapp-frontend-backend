import React from 'react';

class NavComponent extends React.Component{
    logout() {
        this.props.history.push('/logout');
    }
    render () {
        return (
            <div className="w-100 navbardiv">
                <nav className="navbar navbarr justify-content-end navbar-expand-lg">
                    <button className="btn btn-default logout" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                </nav>
            </div>
        );
    
    }
}
export default NavComponent;