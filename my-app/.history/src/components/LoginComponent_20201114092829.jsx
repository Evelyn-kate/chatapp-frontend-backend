import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';



class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            err: ''
        }
    }



    // login (e) {
    // }
    onSubmit = (e) => {
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;
        if (username !== 0 && password !== 0) {
            this.props.history.push('/welcome/username');
        } else {
            this.setState({
                err: 'Invalid'
            });
        }
    }
    render() {
        let format = {
            color: "#ff0000"
        };
        return (
            <div className="container">
                <div className="col-lg-4 offset-lg-4 box-login">
                    <div className="card">
                        <div className="card-header">
                            {/*  <h4>   
                            <span className ="font-weight-cold" >TEX-IT</span>

                        </h4> */}
                            <h3 className="text-center">Login</h3>
                        </div>

                        <div className="card-body">

                            <Form className="text-center" onSubmit={this.onSubmit}>


                                {/* <div class="imgcontainer">
                                <img src="F:\Simple Chat\my-app\src\components\LoginPage\User_Avatar_2.png" alt="Avatar" class="avatar"/>
                                </div> */}


                                <span style={format}>{this.state.err !== '' ? this.state.err : ''}</span>

                                <FormGroup>
                                    <Container>
                                        <Row>
                                            <Col xs={6} md={4}>
                                                <Image className="text-center" src="/images/User.jpg" roundedCircle />
                                            </Col>
                                        </Row>
                                    </Container>
                                    <div className="form-group">
                                        <Label>Username</Label>
                                        <input type="text" name="username" className="form-control" />
                                        <div className="input-group-append" style={{ position: "right" }}>
                                            <button className="btn-sm btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div role="separator" class="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <Label>Password</Label>
                                            <input type="password" name="password" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <span className="psw">Forgot <a href="https://gmail.com">password?</a></span>

                                        </div>
                                        <br /><br />

                                        {/* <input type="submit" value="Submit"/> 
                                    <button type='submit' variant='primary'> Submit</button>*/}
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginComponent;