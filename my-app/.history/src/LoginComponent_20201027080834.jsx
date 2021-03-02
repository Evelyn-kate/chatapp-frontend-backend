import React from 'react';

class LoginComponent extends React.Component {
     
    constructor () {
        super();
        this.state = {
            err: ''
        }
    }



    login (e) {
       e.preventDefault ();
       var username = e.target.elements.username.value;
       var password = e.target.elements.password.value;
       if(username == 'abc' && password == '123') {
            this.props.history.push('/welcome/' + username);
       } else {
            this.setState({
                err: 'Invalid'
            });
       } 
    }
    render(){
        let format = {
            color: "red"
        };
        return (
            <div>
                 <h4>TEX-IT</h4>
                 <h3>Login</h3>
                 <span style = {format}>{this.state.err != '' ? this.state.err : ''}</span>
                 <form method="post" onSubmit = {this.login.bind(this)}>
                     Username <input type="text" name="username"/>
                     <br/>
                     Password <input type="password" name="password"/>
                     <br/>
                     <input type="submit" value="Submit"/>
                 </form>
            </div>
            
        );
    }
}

export default LoginComponent;