import React, { Component } from 'react';
import './Canvas.css';
import { PaperScope } from 'paper';

class Canvas extends Component<any, any> {

  render() {
    return (
      <canvas id="canvas" ref="canvas" data-paper-resize></canvas>
    );
  }

  constructor(props){
    super(props);

    window['paper'] = new PaperScope();
  }

  componentDidMount(){
    let scope = window['paper'];
    scope.setup(document.getElementById('#canvas'));
    var pscope = PaperScope.get(1);
    pscope.activate();
    pscope.view.update();
  }
}

export default Canvas;
