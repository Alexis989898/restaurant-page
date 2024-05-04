const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    loadHome: './src/loadHome.js',
    loadMenu: './src/loadMenu.js',
    loadAbout: './src/loadAbout.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output path for images in the dist folder
            },
          },
        ],
      },
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};