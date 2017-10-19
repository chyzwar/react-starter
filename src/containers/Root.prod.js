import React from 'react';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';

import StoreProps from './StoreProps';
import HistoryProps from './HistoryProps';
import Routes from './Routes';

class Root {
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

Root.propTypes = {
  store: StoreProps,
  history: HistoryProps,
};

export default Root;
