'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './../../components/header/js/header';
import BgAnimation from './../../vendor/bganimation';
import './tracinglogin.sass';
class TracingLogin extends Component {
  render() {
    return <div>
      {/* <Header></Header> */}
      <div className = "sign_container">
        <div className = "sign_header">
          <div className = "title">基于区块链的红酒溯源平台</div>
        </div>
        <form action = "" method = "GET">
          <div className = "form-group">
            <div className = "input-group">
              <div className = "input-group-addon">
                <i className = "glyphicon glyphicon-earphone"></i>
              </div>
              <input type = "text" className = "form-control" name = "phone" placeholder = "请输入手机号"/>
            </div>
          </div>
          <div className = "form-group">
            <div className = "input-group">
              <div className = "input-group-addon">
                <i className = "glyphicon glyphicon-lock"></i>
              </div>
              <input type = "password" className = "form-control" name = "pwd" placeholder = "请输入密码"/>
            </div>
          </div>
          <div className = "form-group">
            <div className = "input-group">&nbsp;
              <input type = "checkbox" id = "c1" name = "remember"/>
              <label for = "c1">&nbsp;&nbsp;记住我</label>
            </div>
          </div>
          <div className = "form-group">
            <button type = "submit" className = "btn btn-primary width100">登录</button>
          </div>
        </form>
      </div>
      <canvas id = "myCanvas"></canvas>
    </div>;
  }
  componentDidMount() {
    BgAnimation('myCanvas');
  }
}
ReactDOM.render(
  <TracingLogin/>,
  document.getElementById('app')
);
module.exports = TracingLogin;