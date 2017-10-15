import history from './history';

console.log(history);

// const main = document.getElementById('main');

history.listen(({ pathname, state }, action) => {
  console.log(action, pathname, state);
});
