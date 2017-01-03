// Webpack config
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),

  entry: ['../src/main.jsx'],

  output: {
    path: path.join(__dirname, 'app', 'browser'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.node$/,
        loaders: ['node']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ]
};
