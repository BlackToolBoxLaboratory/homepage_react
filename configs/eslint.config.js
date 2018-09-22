const webpack = require('webpack');

/* eslint-disable no-alert, no-console */
/* eslint-enable no-alert, no-console */

const eslint_config = {
  'test': /\.js$/,
  'include': /src/,
  'exclude': /node_modules/,
  'enforce': 'pre',
  'use': 
  {
    'loader': 'eslint-loader',
    'options': {
      'fix': true,
    }
  }
}

module.exports = eslint_config;
