import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { VACCINES } from './shared/vaccines';
import CurrentLocation from './components/CurrentLocation';
import Map from './components/map.js';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			vaccines: VACCINES
		};
	}
	
	render(){
		return (
			<div className='App'>
				
				<Navbar color="primary" className="justify-content-center">
				<CurrentLocation text-align = "center"/>
				</Navbar>
				<Map />
				<h1>General Information</h1>
				<Menu vaccine={this.state.vaccines} />
			</div>
		);
	}
}

export default App;