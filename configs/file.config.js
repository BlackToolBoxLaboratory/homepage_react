const file_config = {
  test: /\.png$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './images/'
      }
    }
  ]
}

module.exports = file_config;
