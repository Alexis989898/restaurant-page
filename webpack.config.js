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
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 8192, // In bytes, if the file is greater than this size, it will be served as a separate file
                    name: 'images/[name].[ext]', // Output path and file name format
                },
            },
        ],
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