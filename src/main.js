import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/history"
          component={About}
        />
        <Route
          exact
          path="/manage"
          component={Topics}
        />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
