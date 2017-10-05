import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import createStore from 'redux/lib/createStore';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import browserHistory from './history';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    routerMiddleware(browserHistory),
  ),
  /* eslint-enable */
);

export default store;
