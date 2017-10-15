import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const { contentWindow } = document.getElementById('main');

//that brittle need to fix
setTimeout(() => {
  ReactDOM.render(
    <Provider store={contentWindow.store}>
      <contentWindow.DevTools />
    </Provider>,
    document.getElementById('dev-tools'),
  );
}, 2000);

