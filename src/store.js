import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import createStore from 'redux/lib/createStore';
import routerMiddleware from 'react-router-redux/es/middleware';
import routerReducer from 'react-router-redux/es/reducer';
import browserHistory from './history';

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(
    routerMiddleware(browserHistory)
  ),
);

export default store;
