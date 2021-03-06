'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Carousel from './../../components/carousel/js/carousel';
import './imagemark.scss';
class ImageMark extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className = 'imageMark-wrap'>
        <Carousel imgs = {datainfo.images}/>
      </div>
    )
  }
}
ReactDOM.render(
  <ImageMark/>,
  document.getElementById('app')
);
module.exports = ImageMark;