import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import axios from 'axios';
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import AuthService from "../../src/services/auth.service.js";
import { isEmail } from "validator";

import NavComponent from './NavComponent';
import SideComponent from './SideComponent';

import { apiSaveUser } from '../api/index';

//Error message for the required field
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

//check if the password is valid in the database
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid password.
            </div>
        );
    }
};

//Error message for the username field
const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

class AddComponent extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            err: '',
            id: '',
            loading: false,
            username: '',
            email: '',
            password: '',
            mode: 'submit',
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleChange(event) {
        let varToSet = {};
        varToSet[event.target.name] = event.target.value;
        this.setState(varToSet);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        apiSaveUser(user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                // check if registration was successfull
                if (!res.status) {
                    //todo
                } else {
                    // success message
                    window.location = "users"
                }
            })
        // const username = e.target.elements.username.value;
        // const password = e.target.elements.password.value;

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(this.state.username, this.state.email, this.state.password)
                .then(response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({successful: false, message: resMessage});
                });
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>

                        <div className="col-sm-10 col-md-10 col-lg-10 pl-2 contenu">
                         {/*navbar component*/}
                            <NavComponent history={this.props.history} />
                        <div className="container">
                            <div className="col-lg-9 offset-lg-1 box-login">
                                <div className= "FormGroup">
                                    <div> <h3 className="text-center"><b>REGISTER</b></h3></div>
                                    <div>

                                        <Form onSubmit={this.onSubmit} ref={c => { this.form = c; }}>
                                            <span style={{ color: "#ff0000" }}>{this.state.err !== '' ? this.state.err : ''}</span>
                                            <FormGroup>
                                                <Container>
                                                    <Row>
                                                        {/*<Col xs={6} md={4}>
                                                            <Image className="text-center" src={"../images/User.jpg"} roundedCircle />
                                                        </Col>*/}
                                                    </Row>
                                                </Container>
                                                <div className="form-group">
                                                    <Label className="w-100 text-left">
                                                        <span className="pb-2"><b>Username</b></span>
                                                        <Input type="name" name="username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} validations={[required, vusername]} />
                                                    </Label>
                                                </div>
                                                <div className="form-group">
                                                    <Label className="w-100 text-left">
                                                        <span className="pb-2"><b>User email</b></span>
                                                        <Input type="email" name="user email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} validations={[required, email]} />
                                                    </Label>
                                                </div>
                                                <div className="form-group">
                                                    <Label className="w-100 text-left">
                                                        <span className="pb-2"><b>Password</b></span>
                                                        <Input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} validations={[required, vpassword]} />
                                                    </Label>
                                                </div>

                                                <div className="form-group">
                                                    <span><b>Forgot <a href="#">password?</a></b></span>
                                                </div>
                                                <div className="form-group">
                                                    <button className="btn btn-success" type="submit">REGISTER</button>
                                                </div>
                                                {this.state.message && (
                                                    <div className="form-group" >
                                                        <div className={this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                                            {this.state.message}
                                                        </div>
                                                    </div>
                                                )}
                                                <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
                                            </FormGroup>
                                        </Form>
                                    </div>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
                    
        );
    }
}

export default AddComponent;