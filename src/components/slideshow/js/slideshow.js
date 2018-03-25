'use strict';
import React from 'react';
import Base from './../../base/js/base';
class SlideShow extends Base{
  constructor(props){
    super(props);
    Base.extend(this.state, {});
  }
  render(){
    return (
      <div>Slider</div>
    )
  }
}
module.exports = SlideShow;