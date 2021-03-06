const path = require('path');
const webpack = require('webpack');

const includeJSPaths = [
  path.resolve(__dirname, 'js'),
];

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: './dist',
  },
  output: {
    publicPath: '/dist/js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: includeJSPaths,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|css|eot|ttf)$/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['GA_CODE',]),
  ]
};
