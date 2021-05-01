import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

class Menu extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const menu = this.props.vaccine.map((vaccine) => {
			return(
				<div key={vaccine.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object src={vaccine.image} alt={vaccine.name} />
						</Media>
						<Media body className="ml-3">
							<Media heading><strong>{vaccine.name}</strong></Media>
							<div><strong>Company Location- </strong>{vaccine.category}</div>
							<div><strong>Info - </strong>{vaccine.description}</div>
							<div>Info source - {vaccine.source}</div>
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{menu}
					</Media>
				</div>
			</div>
		);
	}
}


export default Menu;