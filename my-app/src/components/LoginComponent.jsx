import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from 'react-redux';
import {Types} from '../Actions/actionTypes';

import AuthService from "../services/auth.service";

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

class LoginComponent extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            err: '',
            username: "",
            password: "",
            loading: false,
            message: '',

        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }



    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            message: "",
            successful: false
        });
        // var username = e.target.elements.username.value;
        // var password = e.target.elements.password.value;
        this.form.validateAll();
        //redirecting after authentication...
        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                data => {
                    console.log(data);
                    const action = { type: Types.ADD_USER, value: data };
                    this.props.dispatch(action);

                    this.props.history.push("/home");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
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

                            <Form className="text-center" onSubmit={this.onSubmit} ref={c => { this.form = c; }}>

                                
                                <span style={format}>{this.state.err !== '' ? this.state.err : ''}</span>

                                <FormGroup>
                                    <div className="form-group">

                                        <div className="form-group row col-12 pr-0">
                                            <Label className="w-100 text-left">
                                                <span className="pb-2">Username</span>
                                                <Input type="text" name="username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} validations={[required]} />
                                            </Label>
                                        </div>

                                        <div className="form-group row col-12 pr-0">
                                            <Label className="w-100 text-left">
                                                <span className="pb-2">Password</span>
                                                <Input type="password" name="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} validations={[required]} />
                                            </Label>
                                        </div>

                                        <div className="form-group">
                                            <span className="psw">Forgot <a href="https://gmail.com">password?</a></span>
                                        </div>
                                        <br /><br />

                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block" disabled={this.state.loading}>
                                                {this.state.loading && (<span className="spinner-border spinner-border-sm"></span>)}
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                        {this.state.message && (
                                            <div className="form-group">
                                                <div className="alert alert-danger" role="alert">
                                                    {this.state.message}
                                                </div>
                                            </div>
                                        )}
                                        <CheckButton style={{ display: "none" }} ref={c => { this.checkBtn = c; }} />
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

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(LoginComponent);