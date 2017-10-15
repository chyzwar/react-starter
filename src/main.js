import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import history from './history';
import configureStore from './store/configureStore';
import Viewer from './containers/Viewer';
import Create from './containers/Create';
import History from './containers/History';
import Manage from './containers/Manage';

configureStore()
  .then((store) => {
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
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
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root'),
    );
  });

