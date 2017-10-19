const configPath = `../config/${process.env.CONFIG_NAME}`;

/* eslint import/no-dynamic-require: ["off"] */
/* eslint global-require: ["off"] */
async function configureStore() {
  const config = require(configPath);

  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./configureStore.prod')(config);

    case 'development':
      return require('./configureStore.dev')(config);

    default:
      throw new Error(`Unknown webpack mode: ${process.env.NODE_ENV}`);
  }
}

export default configureStore;
