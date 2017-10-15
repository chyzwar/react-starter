import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import createStore from 'redux/lib/createStore';

import { routerReducer, routerMiddleware } from 'react-router-redux';
import browserHistory from '../history';

function configureStore() {
  const store = createStore(
    combineReducers({
      router: routerReducer,
    }),
    applyMiddleware(routerMiddleware(browserHistory)),
  );
  return store;
}


export default configureStore;
