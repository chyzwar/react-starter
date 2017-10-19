import React from 'react';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import Routes from './Routes';

class RootProd {
  render() {
    const { store, history } = this.props;

    return (
      <AppContainer>
        <Provider store={store}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </Provider>
        </Provider>
      </AppContainer>
    );
  }
}

export default RootProd;
