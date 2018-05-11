import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import requireLogin from './hoc/requireLogin';

const SecureDashboard = requireLogin(Dashboard);

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SecureDashboard} />
    </Switch>
  </BrowserRouter>
);
