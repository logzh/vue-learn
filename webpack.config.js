/**
 * Created by spencezhang on 2015/10/15.
 */
var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        thread: 'js/bbs/thread.js',//页面1或者模块1入口
        list:   'js/shiwan/list.js',//页面1或者模块1入口
        trialEmpty:   'js/shiwan/empty.js',//页面1或者模块1入口
        demo: 'js/demo.js'//页面2或者模块2入口
    },
    output: {
        path: 'build/',//打包的目标目录
        filename: '[name].bundle.js',     //生成的文件名
        publicPath: 'build/'      //如果资源需要上传到cdn可以使用 http://mycdn/asset/
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],// 配置可以不书写的后缀名
        root: path.join(__dirname, 'public/'), //配置绝对路径，alias、entry中会使用
        alias: {
            zepto: "js/lib/zepto.js",
            swiper: "js/lib/swiper.js"
        }
    },
    module: {//各种加载器
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url?limit=8192'//小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
        }]
    },
    devtool: "#source-map",
    watch: true,
    plugins: [
        commonsPlugin
        //,
        //function() {//https://webpack.github.io/docs/long-term-caching.html
        //    this.plugin("done", function(stats) {//生成对于的打包文件，详细信息，特别是hash信息 
        //        require("fs").writeFileSync(
        //            path.join(process.cwd(), "stats.json"),
        //            JSON.stringify(stats.toJson()));
        //    });
        //}
    ]

};
