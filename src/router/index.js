import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" isPrivate={true} component={Dashboard} />
    <Route path="/auth" component={Auth} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
