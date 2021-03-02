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
       if(username === 'abc' && password === '123') {
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
            <div class="container" style={{backgroundColor: "blue",}}>
                 <h4>TEX-IT</h4>
                 <h3>Login</h3>
                 <div class="imgcontainer">
                   <img src="F:\Simple Chat\my-app\src\components\LoginPage\User_Avatar_2.png" alt="Avatar" class="avatar"/>
                 </div>

                 <span style = {format}>{this.state.err !== '' ? this.state.err : ''}</span>
                 <form method="post" onSubmit = {this.login.bind(this)}>
                     Username <input type="text" name="username" />
                     <br/>
                     Password <input type="password" name="password" required/>
                     <br/>
                     <input type="submit" value="Submit"/>
                     <span class="psw">Forgot <a href="foo" onClick={foo}>password?</a></span>

                 </form>
            </div>
            
        );
    }
}

export default LoginComponent;