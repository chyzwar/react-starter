import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './Routes';

const Root = ({ store, history }: RootProps) => (
  <Provider store={store}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </Provider>
);

export default Root;
