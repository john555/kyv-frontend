import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={() => <h1>App</h1>} />
    </Switch>
  </BrowserRouter>
);
