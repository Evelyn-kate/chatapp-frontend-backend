import React from 'react';
import { Form, FormGroup } from 'reactstrap';



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
                 function Avatar() {
                     console.log(avatar);
                 return(
                    <div class="imgcontainer">
                    <img src="F:\Simple Chat\my-app\src\components\LoginPage\User_Avatar_2.png" alt="Avatar"/>
                  </div>
                 );
                 }
                 <span style = {format}>{this.state.err !== '' ? this.state.err : ''}</span>
                
                 <Form method="post" onSubmit = {this.login.bind(this)}>
                     <FormGroup>
                     Username <input type="text" name="username" />
                     <br/>
                     Password <input type="password" name="password" required/>
                     <br/>
                    {/* <input type="submit" value="Submit"/> 
                     <button type='submit' variant='primary'> Submit</button>*/}
                    <button className="btn btn-success">Submit</button>
                     <span class="psw">Forgot <a href="https://github.com">password?</a></span>

                     </FormGroup>
                 </Form>
                 
            </div>
            
        );
    }
}

export default LoginComponent;