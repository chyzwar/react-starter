import type { Store } from 'redux';
import type { BrowserHistory } from 'history';

export type RootProps = {
  store: Store<any>,
  history: BrowserHistory,
};
