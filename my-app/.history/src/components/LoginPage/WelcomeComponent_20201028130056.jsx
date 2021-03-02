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
                    1 of 2
                    </div>
                    <div class="col-8">
                    2 0f 2
                    </div>
                </div>
                </div>
            </div>
            
        );
    }
}

export default WelcomeComponent;