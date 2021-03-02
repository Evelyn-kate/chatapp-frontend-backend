import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import WelcomeComponent from './WelcomeComponent';

import LoginComponent from './LoginComponent';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';

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