import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import login from 'F:/Simple Chat/my-app/src/components/LoginPage/login.css'

import WelcomeComponent from 'F:/Simple Chat/my-app/src/WelcomeComponent.jsx';

import LoginComponent from 'F:/Simple Chat/my-app/src/LoginComponent.jsx';
class IndexComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {LoginComponent}/>
                    <Route path="/welcome/username" component = {WelcomeComponent}/> 
                    <Route exact path="/logout" component = {LoginComponent}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default IndexComponent ;