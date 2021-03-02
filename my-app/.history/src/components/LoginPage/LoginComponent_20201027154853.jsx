import React from 'react';
import { Form } from 'reactstrap';
//import Button from 'react-bootstrap/Button'; 


 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossOrigin="anonymous"/>

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
            <div class="container" style={{backgroundColor: "white",}}>
                 <h4>TEX-IT</h4>
                 <h3>Login</h3>
                 <div class="imgcontainer">
                   <img src="F:\Simple Chat\my-app\src\components\LoginPage\User_Avatar_2.png" alt="Avatar" class="avatar"/>
                 </div>

                 <span style = {format}>{this.state.err !== '' ? this.state.err : ''}</span>
                
                 <form method="post" onSubmit = {this.login.bind(this)}>
                     <Form.Group>
                     Username <input type="text" name="username" />
                     <br/>
                     Password <input type="password" name="password" required/>
                     <br/>
                    {/* <input type="submit" value="Submit"/> 
                     <button type='submit' variant='primary'> Submit</button>*/}
                    <button className="btn btn-success">Submit</button>
                     <span class="psw">Forgot <a href="https://github.com">password?</a></span>

                     </Form.Group>
                 </form>
                 
            </div>
            
        );
    }
}

export default LoginComponent;