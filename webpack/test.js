const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');

/**
 * Remove Html and CommonChunks plugin.
 * @type {Array}
 */
commonConfig.plugins = commonConfig.plugins.slice(0, 1);

/**
 * Merge common config with test specific
 */
module.exports = (env) => {
  return webpackMerge(commonConfig, {
    /**
     * Webpack is only used as preprocessor,
     * Additionaly adds test shims
     */
    entry: {
      testing: './src/test.spec.ts'
    },
    output: {},
    devtool: 'source-map',
    plugins: [
      /**
       * Plugin: DefinePlugin strigify in source code
       */
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"',
        },
      }),
    ],
  });
};
