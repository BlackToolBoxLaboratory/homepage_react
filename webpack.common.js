const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: path.join(__dirname, '/dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      eslint_config,
      babel_config,
      style_config,
      file_config
    ]
  },
  // "resolve": {
  //   "modules": [
  //     path.resolve('./node_modules'),
  //     path.resolve('./src')
  //   ]
  // },
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: false
            }
        })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  performance: {
    "hints": false
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Black ToolBox Laboratory',
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
};