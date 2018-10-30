const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
  },
  entry: {
    filename: './src/index.js',
  },
  output: {
    publicPath: '/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ]
};

module.exports = config;
