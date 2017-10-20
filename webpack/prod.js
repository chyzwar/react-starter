const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./common.js');

/**
 * Merge common config with prod specific configuration
 */
module.exports = webpackMerge(commonConfig, {
  /**
   * Disable in-memmory budles/files
   */
  cache: false,
  /**
   * Developer tool to enhance debugging.
   *
   * The 'source-map' settings is meant to be used in production only. It
   * splits the source map in a separate file and it is slow to compute.
   *
   * @see https://webpack.js.org/configuration/devtool/
   */
  devtool: 'source-map',
  /**
   * Add additional plugins to the compiler.
   *
   * @see https://webpack.js.org/configuration/plugins/#plugins
   */
  plugins: [
    /**
     * Plugin CleanWebpackPlugin
     * Description: Clean build folder.
     *
     * @see https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin(
      ['build'],
      { root: path.resolve(), verbose: true },
    ),
    /**
     * HtmlWebpackPlugin configuration
     *
     * @see https://webpack.js.org/plugins/html-webpack-plugin/
     */
    new HtmlWebpackPlugin({
      title: 'React Starter',
      template: 'src/templates/main.html',
      filename: 'index.html',
      chunkSortMode: 'manual',
      chunks: ['common', 'main'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
      },
    }),
    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     *
     * @see https://github.com/webpack-contrib/uglifyjs-webpack-plugin
     */
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      output: {
        comments: false,
      },
      mangle: {
        screw_ie8: true,
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false,
      },
    }),
    /**
     * Plugin: DefinePlugin strigify in source code
     *
     * @see https://webpack.js.org/plugins/define-plugin/
     */
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
  ],
});
