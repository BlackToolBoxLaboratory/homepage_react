const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const style_config = {
  test: /\.less$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
  }, {
    loader: 'css-loader'
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [require('autoprefixer')]
    }
  }, {
    loader: 'less-loader'
  }]
}

module.exports = style_config;
