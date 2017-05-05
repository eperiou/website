const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV = path.resolve(__dirname, 'Client/Components');
const OUTPUT = path.resolve(__dirname, 'Client/Output');

const config = {
  context: path.join(__dirname, './Client'),
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    `${DEV}/index.jsx`,
  ],
  output: {
    path: OUTPUT,
    filename: 'myCode.js',
  },
  resolve: {
    extensions: [".js", ".json",".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Check for all js files
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.(sass|css)$/, // Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/, // Check for sass or scss file names
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.png$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'Client/Output'),
    compress: true,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      title: 'My App',
      filename: path.resolve(OUTPUT, 'index.html'),
      template: 'index.ejs',
      inject: true,
    }),
  ],
  devtool: 'inline-source-map',
};
if (process.env.NODE_ENV === 'production') {
  config.devtool = ''; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
