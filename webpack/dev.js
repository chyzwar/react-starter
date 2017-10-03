const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./common');


/**
 * Merge common config with development specific
 *
 * @see
 */
module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  cache: true,
    /**
     * Add aditional entry for debugging
     */
  entry: {

  },
    /**
     * DevServer Configuration
     *
     * @see https://webpack.js.org/configuration/dev-server/#devserver
     */
  devServer: {
    contentBase: path.resolve('build'),
    compress: true,
    port: 3000,
    hot: true,
    inline: true,
  },
  plugins: [
    /**
     * Plugin: HotModuleReplacementPlugin
     *
     * @see https://webpack.js.org/plugins/hot-module-replacement-plugin/
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * Plugin: DefinePlugin, strigify in source code
     *
     * NOTE: when adding more properties make sure you include them in src/typings.d.ts
     * @see https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],
});
