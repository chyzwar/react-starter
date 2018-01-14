import applyMiddleware from 'redux/lib/applyMiddleware';
import combineReducers from 'redux/lib/combineReducers';
import createStore from 'redux/lib/createStore';

import { connectRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import browserHistory from 'browserHistory';
import routerMiddleware from 'middleware/routerMiddleware';
import loggerMiddleware from 'middleware/loggerMiddleware';
import todosReducer from 'reducers/todosReducer';
import themeReducer from 'reducers/themeReducer';

const middlewares = applyMiddleware(
  routerMiddleware,
  loggerMiddleware,
);

const reducers = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});

const enhancers = composeWithDevTools(middlewares);

function configureStore(initialState: Object = {}) {
  return createStore(
    connectRouter(browserHistory)(reducers),
    initialState,
    enhancers,
  );
}


export default configureStore;
