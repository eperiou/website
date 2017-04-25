const webpack = require('webpack');
const path = require('path');

const DEV = path.resolve(__dirname, 'Client/Components');
const OUTPUT = path.resolve(__dirname, 'Client/Output');

const config = {
  entry: `${DEV}/index.jsx`,
  output: {
    path: OUTPUT,
    filename: 'myCode.js',
  },
  module: {
    loaders: [{
      include: DEV,
      loader: 'babel-loader',
    }],
  },
};

module.exports = config;
