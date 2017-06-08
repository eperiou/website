const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Production = require('./webpack.prod');

const DEV = path.resolve(__dirname, 'Client/Components');
const OUTPUT = path.resolve(__dirname, 'Output');

module.exports = (env) => {
  if (env) {
    return Production;
  }
  return {
  // }
  // const config = {
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
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        minify: {
          collapseWhitespace: true,
        },
        cache: true,
        hash: true,
        title: 'My App',
        filename: path.resolve(OUTPUT, 'index.html'),
        template: 'index.html',
        inject: true,
      }),
    ],
    devtool: 'inline-source-map',
  };
};
