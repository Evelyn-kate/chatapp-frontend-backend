import React from 'react';

class WelcomeComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    render(){
        const {username} = this.props.match.params;
        console.log(username);
        return (
            <div>
                
                <div class="container">
                <div class="row">
                    <div class="col">
                    
                    </div>
                    <div class="col-10">
                            <div class="container">
                                <nav class="navbar navbar-dark bg-dark">
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick ={this.logout.bind(this)}>Logout</button> 
                                </nav>
                                <p3>
                                    <span class="text-xl-center" className="font-weight-bolder">Welcome {username}</span>
                                </p3>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default WelcomeComponent;