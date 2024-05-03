const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  entry: {
    index: './src/index.js',
    loadHome: './src/loadHome.js',
    loadMenu: './src/loadMenu.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Output Management',
        template: 'src/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};