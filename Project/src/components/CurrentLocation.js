import React from 'react';

class CurrentLocation extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {val: "Vaccination Information Based on Current Location"};
	}
	
	
	changeValue = () => {
		this.setState(
			{val: "Vaccination Data in Illinois"}
			);
		}
	
	render(){
		return(
			<div>
				<h1>{this.state.val}</h1>
				<button type="button" onClick={this.changeValue}>Check Current Location</button>
			</div>
		);
	}
}


export default CurrentLocation;