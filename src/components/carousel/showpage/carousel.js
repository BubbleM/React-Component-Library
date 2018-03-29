'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from './../js/carousel';
class ShowCarousel extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className = 'showCarousel-wrap' style = {{width:'100%', height:'520px', overflow:'hidden'}}>
        <Carousel imgs = {datainfo.images}/>
      </div>
    )
  }
}
ReactDOM.render(
  <ShowCarousel/>,
  document.getElementById('app')
);
module.exports = ShowCarousel;