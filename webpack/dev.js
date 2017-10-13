const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    container: './src/container.js',
  },
  /**
   * DevServer Configuration
   *
   * @see https://webpack.js.org/configuration/dev-server/#devserver
   */
  devServer: {
    contentBase: path.resolve('build'),
    compress: true,
    port: 4000,
    hot: true,
    inline: true,
    overlay: true,
  },
  plugins: [
    /**
     * Plugin: HotModuleReplacementPlugin
     *
     * @see https://webpack.js.org/plugins/hot-module-replacement-plugin/
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * HtmlWebpackPlugin configuration
     *
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      title: 'React Starter - Container',
      template: 'src/templates/container.html',
      filename: 'index.html',
      excludeChunks: ['main'],
      inject: 'head',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
      },
    }),
    /**
     * Plugin: DefinePlugin, strigify in source code
     *
     * @see https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],
});
