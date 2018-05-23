'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './../../components/header/js/header';
import ProdBanner from './../../components/banner/js/prodbanner';
import AttrBanner from './../../components/banner/js/attrbanner';
import './tracing.sass';
class Tracing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = 'tracing_wrap'>
        <Header></Header>
        <div className = 'content'>
          <ProdBanner data = {this.props.bgInfo[0]} id = "index"/>
          <AttrBanner data = {this.props.attrInfo} id = "apply"/>
          <ProdBanner data = {this.props.bgInfo[1]} id = "solution"/>
          <div className = "search_container" id = "tracing">
            <div className = "search_bg"></div>
            <div className = "search_wrap row">
              <div className = "col-lg-8">
                <div className = "input-group">
                  <input type = "text" className = "form-control" placeholder = "请输入溯源编码"/>
                  <div className = "input-group-btn">
                    <button type = "button" className = "btn btn-info">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id = "about">
          <span>基于区块链的红酒溯源平台©2018展示专用</span><br /><br />
          <span>
            <a href = ''>注册&nbsp;|&nbsp;</a>
            <a href = ''>登录&nbsp;|&nbsp;</a>
            <a href = ''>关于我们&nbsp;|&nbsp;</a>
            <a href = ''>功能&nbsp;|&nbsp;</a>
            <a href = ''>隐私权政策&nbsp;|&nbsp;</a>
            <a href = ''>服务条款</a>
          </span>
        </footer>
      </div>
    )
  }
}
ReactDOM.render(
  <Tracing bgInfo = {dataInfo.bgInfo} attrInfo = {dataInfo.attrInfo}/>,
  document.getElementById('app')
);
module.exports = Tracing;