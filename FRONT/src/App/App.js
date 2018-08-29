import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';
import sketch from './sketches/bubbles.js';


class App extends React.Component{


	constructor(props) {
		super(props);
		this.state = {
			stateSketch: sketch,
			bubbleData: "hi"
		};
	}

	componentWillMount() {
		var data = this.getBubbleData();
		this.setState({bubbleData: data});
	}

	getBubbleData() {
		console.log("Getting Bubble Info from Backend....");
		var url = "http://localhost:2000/api/getBubbleInfo";
		fetch(url).then(function(response){
			return response.json();
		}).then(function(data) {
			console.log("Received:\n" + JSON.stringify(data, null, "\t"));
			return data;
		});
	}

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch} bubbleData={this.state.bubbleData}/>
			</div>
		);
	}
}

export default App;
