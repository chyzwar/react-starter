

/* eslint import/no-dynamic-require: ["off"] */
/* eslint global-require: ["off"] */
function configureStore() {
  const { default: config } = require(`../config/${process.env.CONFIG_NAME}`);

  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./configureStore.prod').default(config);

    case 'development':
      return require('./configureStore.dev').default(config);

    default:
      throw new Error(`Unknown webpack mode: ${process.env.NODE_ENV}`);
  }
}

export default configureStore;
