 import React from 'react';

class NavComponent extends React.Component{
    logout = () => {
        localStorage.clear();
        this.props.history.push('/logout');
    }

    render () {
        return (
            <div className="navbardiv" style={{borderRadius: "15px 15px 15px 15px",  border: "2px solid cornflowerblue"}}>
                <nav className=" navbarr justify-content-end navbar-expand-lg pr-0 pl-0">
                    <div className= "d-flex justify-content-end">
                        <div className =" p-1">
                            <button className="btn btn-default logout" type="submit" onClick={this.logout}> <b>Logout</b></button>
                        </div>
                    </div>
               </nav>
            </div>
        );
    
    }
}

export default NavComponent;