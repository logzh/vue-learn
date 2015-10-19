/**
 * Created by spencezhang on 2015/10/15.
 */
var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        thread: './public/js/bbs/thread.js',
        demo: './public/js/demo.js'
    },
    output: {
        path: path.join(process.cwd(), 'public/build/'),
        filename: '[name].bundle.js',
        publicPath:'build/'//http://mycdn/asset/
        //sourceMapFilename: '[file].map',
        //chunkFilename: "[chunkhash].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root:path.join(process.cwd(), 'public/js/'),
        alias: { zepto: "lib/zepto.js" }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        },{
            test: /\.json$/,
            loader: 'json'
        },{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /\.(jpg|png)$/,
            loader: 'url?limit=8192'
        }]
    },
    plugins: [
        commonsPlugin
    ]

};
