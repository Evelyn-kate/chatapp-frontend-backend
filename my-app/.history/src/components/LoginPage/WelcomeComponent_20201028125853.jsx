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
                {/* <h3>Welcome {username}</h3>
                <button onClick ={this.logout.bind(this)}>Logout</button> */}
                <div class="container">
                <div class="row">
                    <div class="col">
                    
                    </div>
                    <div class="col-6">
                    
                    </div>
                    <div class="col">

                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default WelcomeComponent;