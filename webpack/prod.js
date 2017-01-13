const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
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

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'babili'],
        plugins: [
          'transform-react-jsx',
          'transform-class-properties',
        ],
      },
    },
    ],
  },

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
     * Plugin: DefinePlugin
     * Define variables, strigify in source code
     * @type {String}
     */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
});
