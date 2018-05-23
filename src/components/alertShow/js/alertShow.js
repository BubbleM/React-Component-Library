'use strict';
import './../scss/alertShow.scss';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class AlertShow extends Component {
  constructor(props){
    super(props);
    this.state = {isShow: true};
  }
  componentWillMount(){
    this.setState({isShow: true});
  }
  onClose(){
    this.props.isShow = false;
    this.setState({
      isShow: false
    });
  }
  render() {
    const isShow = this.state.isShow && this.props.isShow;
    if (isShow || this.props.isShow) {
      return(
        <div className = {'alertShow'}>
          <div className = 'alertMark'></div>
          <div className = 'alertMain'>
            <div className = "closeIcon" onClick = {this.onClose.bind(this)}>X</div>
            <div className = "sign_header">
              <div className = "title">{this.props.title}</div>
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
                <button type = "submit" className = "btn btn-primary width100">{this.props.action}</button>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return('')
    }
  }
}
module.exports = AlertShow;