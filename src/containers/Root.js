
/* eslint global-require: ["off"] */
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./Root.dev');
}

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod');
}
