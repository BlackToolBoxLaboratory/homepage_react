const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const style_config = {
  test: /\.less|.css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'less-loader',
    },
  ],
};

module.exports = style_config;
