const webpack = require('webpack');

const eslint_config = {
  'test': /\.js$/,
  'include': /src/,
  'exclude': /node_modules/,
  'enforce': 'pre',
  'use': 
  {
    'loader': 'eslint-loader'
  }
}

module.exports = eslint_config;
