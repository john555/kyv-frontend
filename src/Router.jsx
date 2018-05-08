import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
