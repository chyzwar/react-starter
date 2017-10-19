import React from 'react';
import Route from 'react-router/es/Route';

import Viewer from './Viewer';
import Create from './Create';
import History from './History';
import Manage from './Manage';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route
          path="/"
          component={Viewer}
        />
        <Route
          path="/create"
          component={Create}
        />
        <Route
          exact
          path="/history"
          component={History}
        />
        <Route
          exact
          path="/manage"
          component={Manage}
        />
      </div>
    );
  }
}

export default Routes;
