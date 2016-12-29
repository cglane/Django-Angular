var path = require('path');
var Webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer-core');

module.exports = {
  devtool: 'eval',
  entry: './app.js',
  output: { path: __dirname, filename: 'static/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /.html/,
        loader: 'html'
      }
    ]
  },
  postcss: [autoprefixer],

  plugins: [
  // We have to manually add the Hot Replacement plugin when running
  // from Node
  new Webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery"
}),
  new Webpack.ProvidePlugin({
      "_": "underscore"
    })
]
};
