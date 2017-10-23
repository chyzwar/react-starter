import type { Store } from 'redux';
import type { BrowserHistory } from 'history';

declare type RootProps = {
  store: Store,
  history: BrowserHistory,
};
