import history from './history';

console.log(history);

history.listen(({ pathname, state }, action) => {
  console.log(action, pathname, state);
});
