import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import compose from 'redux/lib/compose';
import createStore from 'redux/lib/createStore';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import routerMiddleware from '../middleware/routerMiddleware';
import loggerMiddleware from '../middleware/loggerMiddleware';
import todoReducer from '../reducers/todoReducer';
import configReducer from '../reducers/configReducer';
import themeReducer from '../reducers/themeReducer';

const middlewares = applyMiddleware(
  routerMiddleware,
  loggerMiddleware,
);

const reducers = combineReducers({
  todo: todoReducer,
  config: configReducer,
  theme: themeReducer,
});

const enhancers = compose(middlewares);

function configureStore(initialState = {}) {
  return createStore(
    connectRouter(history)(reducers),
    initialState,
    enhancers,
  );
}
export default configureStore;
