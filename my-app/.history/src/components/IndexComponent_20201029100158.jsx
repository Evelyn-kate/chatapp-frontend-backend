import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import WelcomeComponent from './WelcomeComponent';

import LoginComponent from './LoginComponent';
import WelcomedComponent from './WelcomedComponent';
import UserComponent from './UserComponent';
import SettingsComponent from './SettingsComponent';
import MessageComponent from './MessageComponent';


class IndexComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {LoginComponent}/>
                    <Route path="/welcome/username" component = {WelcomeComponent}/> 
                    <Route exact path="/logout" component = {LoginComponent}/>
                    <Route exact path="/welcome/admin" component = {WelcomedComponent}/>
                    <Route exact path="/users" component = {UserComponent}/>
                    <Route exact path="/settings" component = {SettingsComponent}/>
                    <Route  exact path = "./messages" component = {MessageComponent}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default IndexComponent ;