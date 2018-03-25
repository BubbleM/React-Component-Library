'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SildeShow from './../../components/slideshow/js/slideshow';

class ImageMark extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className = 'imageMark-wrap'>
        <SildeShow/>
      </div>
    )
  }
}
ReactDOM.render(
  <ImageMark/>,
  document.getElementById('app')
);
module.exports = ImageMark;