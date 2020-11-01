const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const eslintConfig = require('./configs/eslint.config.js');
const babelConfig = require('./configs/babel.config.js');
const styleConfig = require('./configs/style.config.js');
const fileConfig = require('./configs/file.config.js');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.jsx'),
    vendors: ['react', 'react-dom', 'react-router-dom', '@fortawesome/react-fontawesome'],
  },
  output: {
    publicPath: '/react/v2/',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    openPage: 'react/v2/',
    disableHostCheck: true,
    compress: true,
    https: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 9000,
    inline: true,
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/index.html' }],
    },
  },
  module: {
    rules: [eslintConfig, babelConfig, styleConfig, fileConfig],
  },
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src'),
    },
    modules: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'src')],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BTB Lab. | React',
      favicon: path.join(__dirname, 'public/favicon.ico'),
      inject: true,
      hash: true,
      minify: {
        collapseWhitespace: true,
      },
      chunks: ['index', 'vendors'],
      filename: 'index.html',
      template: path.join(__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
};
