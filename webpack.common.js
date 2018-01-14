const path = require('path');
const webpack = require('webpack');
const FlowWebpackPlugin = require('flow-webpack-plugin');

module.exports = {
  /**
   * The point or points to enter the application.
   *
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    /**
     * Application main entry point
     */
    main: './src/main.js',
  },
  output: {
    /**
     * The publicPath specifies the public URL address of the output files when referenced
     *
     * @see  https://webpack.js.org/guides/public-path/
     */
    publicPath: '/',
    /**
     * The output directory as absolute path (required).
     *
     * @see: https://webpack.js.org/configuration/output/#output-path
     */
    path: path.resolve('build'),
    /**
     * Specifies the name of each output file on disk.
     *
     * @see: https://webpack.js.org/configuration/output/#output-filename
     */
    filename: '[name].[hash].js',
    /**
     * Configure how source maps are named
     *
     * @see: https://webpack.js.org/configuration/output/#output-sourcemapfilename
     */
    sourceMapFilename: '[name].[hash].map',
  },
  resolve: {
    /**
     * Roots for module resolution
     *
     * @see: https://webpack.js.org/configuration/resolve/#resolve-modules
     */
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
    ],

    /**
    * An array of extensions that should be used to resolve modules.
    *
    * @see: https://webpack.js.org/configuration/resolve/#resolve-extensions
    */
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.eot$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          minetype: 'application/vnd.ms-fontobject',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader',
        query: {
          limit: 65000,
          name: '[name].[hash].[ext]',
          minetype: 'application/x-font-ttf',
        },
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        query: { limit: 10000, minetype: 'image/svg+xml' },
      },
    ],
  },
  plugins: [
    /**
     * Plugin FlowWebpackLoader
     *
     * @see https://github.com/happylynx/flow-webpack-plugin
     */
    new FlowWebpackPlugin(),
  ],
};
