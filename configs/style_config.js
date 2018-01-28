const webpack = require("webpack");

const style_config = {
  test: /\.less$/,
  use: [{
      loader: "style-loader" // creates style nodes from JS strings
  }, {
      loader: "css-loader" // translates CSS into CommonJS
  }, {
      loader: "less-loader" // compiles Less to CSS
  }]
}

module.exports = style_config;