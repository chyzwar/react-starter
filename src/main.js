import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import history from './history';
import configureStore from './store/configureStore';
import Viewer from './containers/Viewer';
import Create from './containers/Create';
import History from './containers/History';
import Manage from './containers/Manage';

configureStore()
  .then((store) => {
    ReactDOM.render(
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
        </Provider>

      document.getElementById('root'),
    );
  });


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}
if (module.hot) {
  module.hot.accept('./containers/App', () => { render(App) })
}

