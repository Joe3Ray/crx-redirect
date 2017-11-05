const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx',
    background: './src/background.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};
