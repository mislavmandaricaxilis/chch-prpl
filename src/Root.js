import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';

import Home from './Home';
import Profile from './Profile';
import About from './About';

const Root = () => (
    <React.Fragment>
        <AppBar showMenuIconButton={false} title="PRPL">
            <Link title="Home" to="/">Home</Link>
            <Link title="Profile" to="/profile">Profile</Link>
            <Link title="About" to="/about">About</Link>
        </AppBar>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
);

export default Root;
