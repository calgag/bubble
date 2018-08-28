import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';
import sketch from './sketches/sketch.js';


class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			stateSketch: sketch,
			stateSketch2: sketch
		};
	}

	/*rotationChange(e){
		this.setState({rotation:e.target.value});
	}

	pressEvent(){
		this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
	}*/

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch}/>
			</div>
		);
	}
}

export default App;
