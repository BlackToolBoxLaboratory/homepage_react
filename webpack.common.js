const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const eslint_config = require(path.join(__dirname, '/configs/eslint.config.js'));
const babel_config = require(path.join(__dirname, '/configs/babel.config.js'));
const style_config = require(path.join(__dirname, '/configs/style.config.js'));
const file_config = require(path.join(__dirname, '/configs/file.config.js'));

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/index.jsx'),
    vendors: ['react', 'react-dom', 'react-router-dom', '@fortawesome/react-fontawesome']
  },
  output: {
    publicPath: '/react/v2/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    openPage: 'react/v2/',
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 9000,
    inline: true,
    hot: true
  },
  module: {
    rules: [
      eslint_config,
      babel_config,
      style_config,
      file_config
    ]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    },
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src')
    ]
  },
  performance: {
    'hints': false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BTB Lab. | React',
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      chunks: ['index', 'vendors'],
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ],
};