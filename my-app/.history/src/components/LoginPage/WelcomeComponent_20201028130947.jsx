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
                {/* <h3>Welcome {username}</h3>*/}
                
                <div class="container">
                <div class="row">
                    <div class="col">
                    
                    </div>
                    <div class="col-10">
                            <div class="container">
                                <nav class="navbar navbar-dark bg-primary">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button> 
                                </nav>
                            </div>
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default WelcomeComponent;