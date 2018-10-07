import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const { DefinePlugin } = webpack;
const host = process.env.NODE_ENV === 'production' ? 'https://ride-my-way-andela/api/v1' : 'http://localhost:9998/api/v1';

const config = {
  entry: {
    filename: './src/app.js',
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new DefinePlugin({
      __API__: host,
    }),
  ],
};

export default config;
