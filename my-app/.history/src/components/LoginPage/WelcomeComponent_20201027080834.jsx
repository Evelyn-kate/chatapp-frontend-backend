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
                <h3>Welcome {username}</h3>
                <button onClick ={this.logout.bind(this)}>Logout</button>
            </div>
            
        );
    }
}

export default WelcomeComponent;