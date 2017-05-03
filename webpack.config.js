const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEV = path.resolve(__dirname, 'Client/Components');
const OUTPUT = path.resolve(__dirname, 'Client/Output');

const config = {
  context: path.join(__dirname, './Client'),
  entry: `${DEV}/index.jsx`,
  output: {
    path: OUTPUT,
    filename: 'myCode.js',
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
          // 'sass-loader',
          // 'url-loader',
          // 'file-loader',
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
    contentBase: path.resolve(__dirname, 'Client'),
    compress: true,
  },
  plugins: [
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
  devtool: 'cheap-eval-source-map',
};
if (process.env.NODE_ENV === 'production') {
  config.devtool = ''; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
