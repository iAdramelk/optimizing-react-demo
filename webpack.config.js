const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    before: path.join(process.cwd(), 'src', 'before', 'index.js'),
    after: path.join(process.cwd(), 'src', 'after', 'index.js'),
  },
  output: {
    path: path.join(process.cwd(), 'dist/'),
    filename: '[name].[chunkhash].js',
    publicPath: 'https://iadramelk.github.io/optimizing-react-demo/dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/dist',
    host: 'localhost',
    port: 5555,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.ejs',
      filename: 'before.html',
      chunks: ['before'],
    }),
    new HtmlWebpackPlugin({
      template: './template.ejs',
      filename: 'after.html',
      chunks: ['after'],
    })
  ],
};
