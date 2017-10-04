import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
