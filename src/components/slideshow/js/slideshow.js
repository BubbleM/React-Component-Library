'use strict';
import './../scss/slideshow.scss';
import React from 'react';
import Base from './../../base/js/base';
import ClassName from 'classnames';

/* SlideShow依赖的子组件 imgs btns */
class Imgs extends Base{
  render(){
    return(
      <div>IMGS{this.props.data}</div>
    )
  }
}
class Btns extends Base{
  render(){
    return(
      <div>BTNS</div>
    )
  }
}

class SlideShow extends Base{
  constructor(props){
    super(props);
    Base.extend(this.state, {});
  }
  render(){
    return (
      <div className = "slideshow-wrap">
        <div className = "slide">Test</div>
        {/* <Imgs data = {this.props.info}/>
        <Btns/> */}
      </div>
    )
  }
}
module.exports = SlideShow;