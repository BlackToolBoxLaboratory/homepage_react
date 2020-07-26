const file_config = {
  test: /\.(ttf|png)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: './files/',
      },
    },
  ],
};

module.exports = file_config;
