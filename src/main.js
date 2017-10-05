import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import history from './constants/history';
import store from './constants/store';
import Viewer from './routes/Viewer';
import Create from './routes/Create';
import History from './routes/History';
import Manage from './routes/Manage';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path="/"
          component={Viewer}
        />
        <Route
          exact
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
