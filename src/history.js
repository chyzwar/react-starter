import createBrowserHistory from 'history/createBrowserHistory';

/**
 * Create browser history IE => 11
 *
 * @see https://github.com/ReactTraining/history
 * @type {History}
 */
const history = createBrowserHistory({
  basename: '',
  forceRefresh: false,
  keyLength: 6,
});

export default history;
