const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const commonConfig = require('./common');

/**
 * Merge common config with prod specific configuration
 * @type {object}
 */
module.exports = webpackMerge(commonConfig, {

  /**
   * Disable debug mode for production.
   *
   * See: http://webpack.github.io/docs/configuration.html#debug
   */
  debug: false,

  /**
   * In memmory budles/files
   * @type {Boolean}
   */
  cache: false,

  /**
   * Developer tool to enhance debugging.
   *
   * The 'source-map' settings is meant to be used in production only. It
   * splits the source map in a separate file and it is slow to compute.
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'source-map',

  /**
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [
    /**
     * Plugin: DedupePlugin
     * Description: Prevents the inclusion of duplicate code into your bundle
     * and instead applies a copy of the function at runtime.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     * See: https://github.com/webpack/docs/wiki/optimization#deduplication
     */
    new webpack.optimize.DedupePlugin(),

    /**
     * Plugin: Agressive-Merging
     * Description:
     *
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
     * See: https://github.com/webpack/webpack/tree/master/examples/agressive-merging
     */
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5,
      moveToParents: true,
    }),

    /**
     * Plugin: NgAnnotatePlugin
     * Description: Angular annotate for dependancy injection.
     * ngAnnotate automaticly add annonations in $inject
     *
     * See: https://github.com/jeffling/ng-annotate-webpack-plugin
     */
    new NgAnnotatePlugin({
      add: true,
    }),

    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     *
     * UglifyJs is broken for es6: https://github.com/mishoo/UglifyJS2/issues/448
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     *
     * Lit of options for compress:
     * See: https://github.com/mishoo/UglifyJS2#usage
     */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        passes: 2,
        drop_console: true,
        beautify: false,
        comments: false,
        screw_ie8: true,
        keep_fnames: true,
        drop_debugger: false,
        dead_code: false,
        unused: false,
      },
      mangle: {
        screw_ie8: true,
      },
    }),
    /**
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
    }),
  ],
});
