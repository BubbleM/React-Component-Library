'use strict';
import React, { Component } from 'react';
import AlertShow from './../../alertShow/js/alertShow';
import './../scss/header.sass';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {action: '注册', isShow: false};
  }
  render() {
    return(
    <div>
      {this.state.isShow && <AlertShow isShow = {this.state.isShow} title = "基于区块链的红酒溯源平台" action = {this.state.action}/>}
      <header className = 'header'>
        <div className = "page-logo">
          <a href = "javascript:void(0)">
            <img src = 'http://ofmz75843.bkt.clouddn.com/tracing-logo.jpeg' alt = 'iconlogo'/>
            &nbsp;基于区块链的红酒溯源平台
          </a>
        </div>
        <ul ref = 'el' className = "nav">
          <li className = "nav-item"><a href = "#index">首页</a></li>
          <li className = "nav-item"><a href = "#tracing">防伪追溯</a></li>
          <li className = "nav-item"><a href = "#solution">解决方案</a></li>
          <li className = "nav-item"><a href = "#about">关于我们</a></li>
        </ul>
        <div className = "login">
          <button className = "btn btn-success" role = "button" onClick = {this.loginBtn.bind(this)}>登陆</button>
          <button className = "btn btn-success" role = "button" onClick = {this.registerBtn.bind(this)}>注册</button>
        </div>
      </header>
    </div>
    )
  }
  loginBtn(){
    const self = this;
    self.setState({
      isShow: true,
      action: '登录'
    });
  }
  registerBtn(){
    const self = this;
    self.setState({
      isShow: true,
      action: '注册'
    });
  }
  componentDidMount() {
    var self = this;
    var liNodes = self.refs.el.children;
    if (window.innerWidth > 850) {
      for(let i = 0; i < liNodes.length; i++){
        liNodes[i].onmouseover = function(){
          liNodes[i].style.width = '200px';
        }
        liNodes[i].onmouseout = function(){
          liNodes[i].style.width = '110px';
        }
      }
    }
  }
}
