import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '../view/Login';
import Register from '../view/Register';
import Dashboard from '../view/Dashboard';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/login" />
        </Switch>
    </BrowserRouter>
)

export default Routes;