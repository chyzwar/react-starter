import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import compose from 'redux/lib/compose';
import createStore from 'redux/lib/createStore';

import routerMiddleware from '../middleware/routerMiddleware';
import loggerMiddleware from '../middleware/loggerMiddleware';
import todoReducer from '../reducers/todoReducer';
import routerReducer from '../reducers/routerReducer';
import configReducer from '../reducers/configReducer';
import instrument from '../containers/DevTools/instrument';
import persistState from '../containers/DevTools/persistState';

const middlewares = applyMiddleware(
  routerMiddleware,
  loggerMiddleware,
);

const reducers = combineReducers({
  todo: todoReducer,
  router: routerReducer,
  config: configReducer,
});

const enhancers = compose(
  middlewares,
  instrument,
  persistState,
);

function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    enhancers,
  );
}


export default configureStore;
