import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

const { contentWindow } = document.getElementById('main');

setTimeout(() => {
  ReactDOM.render(
    <Provider store={contentWindow.store}>
      <contentWindow.DevTool />
    </Provider>,
    document.getElementById('dev-tools'),
  );
}, 2000);

