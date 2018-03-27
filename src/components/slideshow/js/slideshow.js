'use strict';
import './../scss/slideshow.scss';
import React from 'react';
import Base from './../../base/js/base';
import ClassName from 'classnames';

class SlideShow extends Base{
  constructor(props){
    super(props);
    Base.extend(this.state, {});
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
  render(){
    let self = this;
    let { imgs } = self.props;
    let parentWidth = 100 * imgs.length + "%";
    let childWidth = 100 / imgs.length + "%";
    return (
      <div ref = "el" className = "slideshow-wrap">
        <ul style = {{width: parentWidth}}>
          { this.renderImgs(imgs, childWidth) }
        </ul>
        <ol>
          <li>icon01</li>
        </ol>
        <span className = "left"></span>
        <span className = "right"></span>
      </div>
    )
  }
  componentDidMount(){
    let self = this;
    let domNode = self.refs.el;
    // flag(true)表示默认从左边往右轮播
    let len = self.props.imgs.length, i = 0, flag = true;
    setInterval(function(){
      if((i == len - 2 && flag != false) || (i == -1 && flag != true)) { flag = !flag; }
      domNode.style.left = '-' + (i+1) * 100 + '%';
      flag ? i++ : i--;
    },3000)
  }
}
module.exports = SlideShow;