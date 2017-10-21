import React from 'react';
import ReactDOM from 'react-dom';

import history from './history';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

const element = document.getElementById('root');
const component = (
  <Root store={store} history={history} />
);

ReactDOM.render(component, element);

console.log(module.hot, 'module hot');

if (module.hot) {
  module.hot.accept(
    './containers/Root',
    () => { ReactDOM.render(component, element); },
  );
}
