import React from 'react';

class NavComponent extends React.Component{
    render () {
        return (
            <div className="w-100">
                <nav className="navbar navbar-dark bg-dark justify-content-end">
                    <button className="btn btn-outline-success logout" type="submit" onClick={this.logout.bind(this)}>Logout</button>
                </nav>
            </div>
        );
    
    }
}
