import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import configureStore from './store/configureStore';
import Root from './containers/Root';

configureStore()
  .then((store) => {
    ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
  });
