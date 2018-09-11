import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import './HUD.css';

class HUD extends React.Component{


	constructor(props) {
		super(props);

	}

	render () {

		return (
			<div className="row HUD">
				<div className="col-md-8">
					<button type="button" className="btn btn-primary hud-btn">Create</button>
					<button type="button" className="btn btn-primary hud-btn">Edit</button>
					<button type="button" className="btn btn-primary hud-btn">Pop</button>
				</div>
				<div className="col-md-4">
					<p className="footer">Pop Priority. Made by Calvin Gagliano and Aiden Nelson.</p>
				</div>
			</div>
		);
	}
}

export default HUD;
