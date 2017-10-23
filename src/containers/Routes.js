import React from 'react';
import Route from 'react-router/es/Route';

import Viewer from './Viewer';
import Create from './Create/Create';
import History from './History';
import Manage from './Manage';

const Routes = (): Array<Route> => (
  [
    <Route
      path="/"
      component={Viewer}
    />,
    <Route
      path="/create"
      component={Create}
    />,
    <Route
      exact
      path="/history"
      component={History}
    />,
    <Route
      exact
      path="/manage"
      component={Manage}
    />,
  ]
);

export default Routes;
