var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

// PostCSS
var cssimport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');
var cssVariables = require('postcss-css-variables');
var customMedia = require('postcss-custom-media');
var customProperties = require('postcss-custom-properties');
var discardComments = require('postcss-discard-comments');
var mediaMinMax = require('postcss-media-minmax');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');
var simpleExtend = require('postcss-simple-extend');
var simpleVars = require('postcss-simple-vars');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24',
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];

var config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.(png|jpeg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },
      {
      test: /\.svg$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  postcss: function () {
      // The context of this function is the webpack loader-context
      // see: http://webpack.github.io/docs/loaders.html#loader-context
      return [
          cssimport({
              // see postcss-import docs to learn about onImport callback
              // https://github.com/postcss/postcss-import
              onImport: function (files) {
                  files.forEach(this.addDependency);
              }.bind(this)
          }),
          discardComments,
          colorFunction,
          mixins,
          simpleExtend,
          customProperties,
          cssVariables,
          simpleVars,
          customMedia,
          mediaMinMax,
          nested,
          calc,
          autoprefixer(AUTOPREFIXER_BROWSERS)
      ];
  }
};

module.exports = config;