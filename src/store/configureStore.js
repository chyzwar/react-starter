

async function configureStore() {
  const { default: config } = await import(`../config/${process.env.CONFIG_NAME}`);

  switch (process.env.NODE_ENV) {
    case 'production':
      return import('./configureStore.prod')
        .then(({ default: configure }) => configure({ config }));

    case 'development':
      return import('./configureStore.dev')
        .then(({ default: configure }) => configure({ config }));

    default:
      throw new Error(`Unknown webpack mode: ${process.env.NODE_ENV}`);
  }
}

export default configureStore;
