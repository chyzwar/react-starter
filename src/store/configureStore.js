

function configureStore(initState: ?Object) {
  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./configureStore.prod').default(initS: ?Objecttate);

    case 'development':
      return require('./configureStore.dev').default(initState);

    default:
      throw new Error(`Unknown webpack mode: ${process.env.NODE_ENV}`);
  }
}

export default configureStore;
