'use strict';
var webpack = require('webpack');
var fs = require('fs');
var optimist = require('optimist'); // 命令行解析库
var cateName = optimist.argv.env.cate || true;
module.exports = {
  entry: __dirname + '/src/category/' + cateName + '/' + cateName + '.js',
  output: {
    filename: cateName != true ? cateName + '.js' : '[name].js',
    path: __dirname + '/dist/' + (cateName != true ? cateName : "")
  },
  module: {
    rules: [
      { test: /.(js|jsx)$/, use: "babel-loader", include: /src/, exclude: /node_modules/ },
      { test: /.css$/, use: "css!postcss" },
      { test: /.scss$/, use: "css!postcss!sass!sass-resources-loader" },
      { test: /.(png|jpg)$/, use: 'url?limit=10240' }
    ]
  },
  devServer: {
    contentBase: './src',
    port: 9000,
    compress: true
  }
}