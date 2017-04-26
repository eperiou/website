const webpack = require('webpack');
const path = require('path');

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
        test: /\.(sass|scss)$/, // Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: DEV,
  },
  devtool: 'eval-source-map',
};
if (process.env.NODE_ENV === 'production') {
  config.devtool = ''; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
