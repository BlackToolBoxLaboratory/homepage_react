const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.base.js');
const envParser = require('./utils/envParser.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  plugins: [new webpack.DefinePlugin(envParser(path.join(__dirname, '.env.development')))],
});
