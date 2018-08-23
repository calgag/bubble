import React, { Component } from 'react';
import './Canvas.css';
require('paper/dist/paper-full');

class Canvas extends Component {

  render() {
    return (
      <canvas ref="canvas" data-paper-resize></canvas>
    );
  }

  updateCanvas(){
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0,100,100);
  }

  componentDidMount(){
    this.updateCanvas();
  }
}

export default Canvas;
