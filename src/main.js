import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'containers/Root';
import configureStore from 'store/configureStore';
import history from './history';

/**
 * Create an redux store
 *
 * @type {Store}
 */
const store = configureStore();

const render = (Component: Component) => {
  ReactDOM.render(
    <Component
      store={store}
      history={history}
    />,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept(
    './containers/Root',
    () => {
      const { default: Component } = require('./containers/Root');
      render(Component);
    },
  );
}
