import React from 'react';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './Routes';
import Theming from './Theming/Theming';

import type { RootProps } from './RootProps';

const Root = ({ store, history }: RootProps) => (
  <AppContainer>
    <Provider store={store}>
      <Theming>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Theming>
    </Provider>
  </AppContainer>
);


export default Root;
