import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './App.css';
import sketch from './sketches/bubbles.js';


class App extends React.Component{


	constructor(props) {
		super(props);
		this.state = {
			stateSketch: sketch,
			isLoaded: "No",
			bubbleData: null
		};
		this.getBubbleData = this.getBubbleData.bind(this);
		this.getBubbleData();

	}

	getBubbleData() {
		console.log("Getting Bubble Info from Backend....");
		var url = "http://localhost:2000/api/getBubbleInfo";
		fetch(url).then((response) => {
			return response.json();
		}).then((data) => {
			console.log("Received:\n" + JSON.stringify(data, null, "\t"));
			this.setState({bubbleData: data});
			this.setState({isLoaded: "Yes"});
		});
	}

	render () {
		var temp;

		if(this.state.isLoaded === "No"){
			temp = <p>Loading...</p>;
		}else if(this.state.isLoaded === "Yes"){
			//temp = <p>Loaded!</p>;
			temp = <P5Wrapper sketch={this.state.stateSketch} bubbleData={this.state.bubbleData}/>;
		}

		return (
			<div>
				{temp}
			</div>
		);
	}
}

export default App;
