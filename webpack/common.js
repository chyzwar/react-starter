const path = require('path');
const webpack = require('webpack');

module.exports = {
  /**
   * The point or points to enter the application.
   *
   * @see https://webpack.js.org/configuration/entry-context/#entry
   */
  entry: {
    /**
     * Angualar Application main entry point
     */
    main: './src/main.js',
  },
  output: {
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
        test: /\.scss$/,
        use: [
          { loader: 'raw-loader' },
          { loader: 'sass-loader' },
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
        test: /\.html$/,
        loader: 'html-loader',
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
  plugins: [],
};
