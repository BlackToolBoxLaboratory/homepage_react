const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const envParser = require("./utils/envParser.js");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin(envParser(path.join(__dirname, ".env.dev")))
  ]
});