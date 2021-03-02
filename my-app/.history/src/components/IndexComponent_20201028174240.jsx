import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import WelcomeComponent from './WelcomeComponent';

import LoginComponent from './LoginComponent';
import WelcomedComponent from './WelcomedComponent';

class IndexComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {LoginComponent}/>
                    <Route path="/welcome/username" component = {WelcomeComponent}/> 
                    <Route exact path="/logout" component = {LoginComponent}/>
                    <Route exact path="/welcome/admin" component = {WelcomedComponent}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default IndexComponent ;