// Electron config for webpack
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  target: 'electron-main',

  entry: './src/browser/main.js',
  output: {
    path: `${__dirname}/app`,
    filename: 'browser.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]

});
