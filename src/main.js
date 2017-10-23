import React from 'react';
import ReactDOM from 'react-dom';

import history from './history';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(<Component store={store} history={history} />, document.getElementById('root'));
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
