'use strict';
var webpack = require('webpack');
var fs = require('fs');
var optimist = require('optimist'); // 命令行解析库
var cateName = optimist.argv.env.cate || true;
var entryName = "", cssName = "", entryObj = {};
if (cateName == true) {
  fs.readdirSync('./src/category').forEach(function(cateName, index) {
      //cateName/cateName指定输出路径为entryname
      if (cateName != "index.html") entryObj[cateName + '/' + cateName] = __dirname + '/src/category/' + cateName + '/' + cateName + '.js';
  });
  entryName = entryObj;
  cssName = "[name].css";
} else if(cateName.indexOf(",")) {//一次打包多个入口文件以逗号分隔
  var cateNameArray = cateName.split(",");
  for(var i =0;i<cateNameArray.length;i++){
      entryObj[cateNameArray[i] + '/' + cateNameArray[i]] = __dirname + '/src/category/' + cateNameArray[i] + '/' + cateNameArray[i] + '.js';
  }
  entryName = entryObj;
  cssName = "[name].css";
  cateName = true;
}else{ //打包单个入口文件
  entryName = __dirname + '/src/category/' + cateName + '/' + cateName + '.js';
  cssName = cateName + '.css';
}

module.exports = {
  entry: entryName, //类别入口文件
    output: {
        path: __dirname + '/dist/' + (cateName != true ? cateName : ""), //打包后的文件存放的地方
        filename: cateName != true ? cateName + '.js' : '[name].js' //打包后输出文件的文件名
    },
  module: {
    rules: [
      { test: /.(js|jsx)$/, use: 'babel-loader', include: /src/, exclude: /node_modules/ },
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