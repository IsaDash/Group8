import React, { Component } from 'react';
//import './components/map.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
 
class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
  alert(event.target.dataset.name);
    
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "IL": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for IL', event.target.dataset)
      },
    }; 
  };
 
  render() {
    return (
      <div className="map">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;