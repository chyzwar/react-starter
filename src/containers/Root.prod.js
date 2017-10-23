import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './Routes';
import type { RootProps } from './RootProps';

const Root = ({ store, history }: RootProps) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default Root;
