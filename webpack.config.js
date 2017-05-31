/**
 * Created by lipeishang on 17-5-29.
 */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//由bundle.js映射到origin文件，容易在浏览器调试
    entry: __dirname + "/public/src/main.js",
    output: {
        path: __dirname + '/public/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "file-loader"},
            {test: /\.jpg$/, loader: "file-loader"},
        ]
    }
};