var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('static/js/common.js');

for (prop in entry) {
  entry[prop].unshift("webpack-dev-server/client?http://localhost:8080");
  entry[prop].unshift("webpack/hot/dev-server");
}

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './public',
    stats: 'error-only',
    port: 8080,
    proxy: {//请求后端数据
      '/api/*': {
        target: 'http://localhost:3000/',
        secure: false
      }
    }
  },
  entry: entry,
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],// 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/')//配置绝对路径，alias、entry中会使用
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'public'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?limit=8192'//小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
      },
      {test: /\.vue$/, loader: 'vue'}
    ]
  },
  devtool: "#source-map",
  plugins: [
    commonsPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]
};
