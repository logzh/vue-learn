var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[hash].js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var templateConfig = require('./html.template.config.js').dev;

var config = {
  entry: entry,
  output: {
    // path: path.join(__dirname, '../'),
    path: path.join(__dirname, './development'),
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js'], // 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/'), // 配置绝对路径，alias、entry中会使用
    alias: {
      "zepto": "static/js/wwq/zepto.js"
    }
  },
  externals: {
    'MtaH5': true,
    'wx': true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'public'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /zepto(\.min)?\.js$/, loader: "exports?Zepto; delete window.$; delete window.Zepto;"
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?limit=1024&name=static/images/[hash].[ext]' // 小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      },
      {
        test: /\.vue$/, loader: 'vue'
      }
    ]
  },
  plugins: [
    commonsPlugin,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('static/css/[name].[chunkhash].css')
  ]
};

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;
