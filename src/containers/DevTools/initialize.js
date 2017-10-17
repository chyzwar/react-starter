import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from './DevTools';

function initialize(store) {
  if (process.env.NODE_ENV === 'development') {
    const { parent } = window;

    ReactDOM.render(
      <DevTools store={store} />,
      parent
        .document
        .getElementById('dev-tools'),
    );
  }
}

export default initialize;

