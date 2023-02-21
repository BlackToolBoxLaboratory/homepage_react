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
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/react/v2/',
  },
  devServer: {
    open: ['react/v2/'],
    historyApiFallback: true,
    allowedHosts: 'all',
    compress: true,
    https: true,
    port: 9000,
    hot: true,
    static: {
      publicPath: '/react/v2/',
    },
    historyApiFallback: {
      rewrites: [{ from: /^\/react\/v2\/$/, to: '/index.html' }],
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
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
};
