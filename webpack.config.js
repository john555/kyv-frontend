const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ENV_DEV = 'development';
const ENV_STAGING = 'staging';
const ENV_PROD = 'production';

const { NODE_ENV } = process.env || ENV_DEV;

let devtool = '';
let devServer = {};
const jsxLoaders = ['babel-loader'];
const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  }),
];

// Add development config
if (NODE_ENV === 'development') {
  devtool = 'inline-source-map';
  devServer = {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    host: 'kyv.andela.com',
    port: 3000,
    hot: true,
  };
  jsxLoaders.push('eslint-loader');
  plugins.push(new webpack.NamedModulesPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

// Add staging and production config
if ([ENV_STAGING, ENV_PROD].indexOf(NODE_ENV) < 0) {
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = {
  devtool,
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: jsxLoaders,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins,
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer,
};
