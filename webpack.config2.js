const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Production = require('./webpack.prod');

const DEV = path.resolve(__dirname, 'Client/Components');
const OUTPUT = path.resolve(__dirname, 'Output');

module.exports = {
  context: path.join(__dirname, './Client'),
  entry: [
    `${DEV}/index.jsx`,
  ],
  output: {
    path: OUTPUT,
    filename: 'myCode.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
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
        test: /\.(sass|css|Css)$/, // Check for sass or scss file names
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
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
    contentBase: path.resolve(__dirname, 'Output'),
    // compress: true,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
  devtool: 'inline-source-map',
};
