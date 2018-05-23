'use strict';
var webpack = require('webpack');
var fs = require('fs');
var glob = require("glob");
var optimist = require('optimist'); // 命令行解析库
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var cateName = optimist.argv.env.cate || true;
var entryName = "", cssName = "", entryObj = {};

var packComponent = function(){
  let files = glob.sync('./src/components/**/showpage/*.js');
  files.forEach((file, index) => {
    let fileName = file.split('/showpage/')[1].split('.js')[0];
    entryObj['component/' + fileName] = __dirname + '/src/components/' + fileName + '/showpage/' + fileName + '.js';
  })
}
packComponent(); // 每次自动打包独立组件
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
      filename: cateName != true ? cateName + '.js' : '[name].js', //打包后输出文件的文件名
      publicPath: '/assets/'
    },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader','eslint-loader'], exclude: /node_modules/ },
      { test: /\.(scss|sass)$/, use: [
        'style-loader', 'css-loader', 'sass-loader'
      ]},
      /* { test: /\.(css|scss)$/, use: [       
         MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')
            ]
          }
        },
        {
          loader: 'sass-loader'
        }
      ]}, */
      { test: /\.(png|jpg)$/, use: 'url-loader?limit=10240' }
    ]
  },
  devServer: {
    contentBase: './src',
    port: 9000,
    compress: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: cssName
    })
  ]
}