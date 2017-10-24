import type { Store } from 'redux';
import type { BrowserHistory } from 'history';

/**
 * Full type check for store is difficult
 *
 * @seed https://blog.callstack.io/type-checking-react-and-redux-thunk-with-flow-part-1-ad12de935c36
 * @see https://blog.callstack.io/type-checking-react-and-redux-thunk-with-flow-part-2-206ce5f6e705
 * @type {Object}
 */
export type RootProps = {
  store: Store<any>,
  history: BrowserHistory,
};
