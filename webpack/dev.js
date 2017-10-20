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
   * Add aditional entry for hot reload and container
   */
  entry: {
    reactHotLoaderPath: 'react-hot-loader/patch',
    container: './src/container.js',
  },
  /**
   * DevServer Configuration
   *
   * @see https://webpack.js.org/configuration/dev-server/#devserver
   */
  devServer: {
    contentBase: path.resolve('build'),
    historyApiFallback: true,
    compress: true,
    port: 4000,
    hot: true,
    inline: true,
    overlay: true,
  },
  plugins: [
    /**
     * Plugin: NamedModulesPlugin
     *
     * @see https://webpack.js.org/plugins/named-modules-plugin/
     */
    new webpack.NamedModulesPlugin(),
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
      title: 'React Starter',
      template: 'src/templates/main.html',
      filename: 'main.html',
      excludeChunks: ['container'],
      chunksSortMode: 'manual',
      chunks: ['reactHotLoaderPath', 'common', 'main'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
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
      chunksSortMode: 'manual',
      chunks: ['container'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    /**
     * Plugin: DefinePlugin, strigify in source code
     *
     * @see https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        CONFIG_NAME: JSON.stringify('dev'),
      },
    }),
  ],
});
