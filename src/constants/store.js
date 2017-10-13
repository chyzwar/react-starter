import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import createStore from 'redux/lib/createStore';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import browserHistory from './history';

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(routerMiddleware(browserHistory)),
);

export default store;
