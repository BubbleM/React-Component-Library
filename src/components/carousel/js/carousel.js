'use strict';
import './../scss/carousel.scss';
import React from 'react';
import Base from './../../base/js/base';
import ClassName from 'classnames';

class Carousel extends Base{
  constructor(props){
    super(props);
    Base.extend(this.state, {});
    this.state.active = 0;
  }
  renderImgs(imgs, width){
    let self = this;
    return imgs.map((item, index) => {
      return (
        <li className = "slideItem" style = {{width: width}}>
          <img className = "item-img" src = {item.src} alt = {item.alt}/>
        </li>
      )
    })
  }
  handleDotClick(i){
    var num = i - this.state.active;
    this.turn(num);
  }
  render(){
    let self = this;
    let { imgs } = self.props;
    let { active } = self.state;
    let parentWidth = 100 * imgs.length + "%";
    let childWidth = 100 / imgs.length + "%";
    return (
      <div className = "slideshow-wrap">
        <ul ref = "el" style = {{width: parentWidth}} onMouseOver = {self.pausePlay.bind(self)} onMouseOut = {self.autoPlay.bind(self)}>
          { this.renderImgs(imgs, childWidth) }
        </ul>
        <ol className = "slider-dots-wrap">
          {
            imgs.map((item, index) => {
              return (<li data-index = {index} onClick = {self.handleDotClick.bind(self,index)}  className = {ClassName({"slider-dots-item": true, "current": active === index})}></li>)
            })
          }
        </ol>
        <div className = "arrow leftArrow" onClick = {self.turn.bind(self, -1)}></div>
        <div className = "arrow rightArrow" onClick = {self.turn.bind(self, 1)}></div>
      </div>
    )
  }
  /* 背景图滚动到第n张，相对于当前active */
  turn(n){
    let self = this;
    let domNode = self.refs.el;
    let { active } = self.state;
    let len = self.props.imgs.length;
    
    let _n = active + n; // 正常滚动到前2张
    if(_n < 0){ _n += len; } // 如果n<0
    if(_n >= len){ _n -= len; } // 如果n>len
    domNode.style.left = '-' + (_n) * 100 + '%';
    self.setState({active: _n});
  }
  autoPlay(){
    this.timer = setInterval(() => {this.turn(1);},3000);
  }
  pausePlay(){
    clearInterval(this.timer);
  }
  componentDidMount(){
    this.autoPlay();
  }
}
module.exports = Carousel;