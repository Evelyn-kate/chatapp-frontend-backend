import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginComponent from './LoginComponent';
import WelcomedComponent from './WelcomedComponent';
import UserComponent from './UserComponent';
import SettingsComponent from './SettingsComponent';
import MessageComponent from './MessageComponent';
import AddComponent from './AddComponent';


class IndexComponent extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/logout" component={LoginComponent} />
                    <Route exact path="/home" component={WelcomedComponent} />
                    <Route exact path="/users" component={UserComponent} />
                    <Route exact path="/add-user" component={AddComponent} />
                    <Route exact path="/settings" component={SettingsComponent} />
                    <Route exact path="/messages" component={MessageComponent} />
                </Switch>
            </Router>
        );
    }
}
export default IndexComponent;