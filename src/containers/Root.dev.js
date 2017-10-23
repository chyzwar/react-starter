import React from 'react';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './Routes';
import type { RootProps } from './RootProps';

const Root = ({ store, history }: RootProps) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </AppContainer>
);


export default Root;
