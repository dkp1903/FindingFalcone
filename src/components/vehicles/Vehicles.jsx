import React, {Component} from 'react';
import ReactRadioButtonGroup from 'react-radio-button-group';

const Vehicles = (props) => {

  
    const {destination, vehicleClass, vehicles, selectedVehicle} = props.allProps;
    return (
      <div className={vehicleClass}>
        <ReactRadioButtonGroup
          name={vehicleClass}
          options={vehicles}
          value={selectedVehicle}
          onChange={ (event) => this.props.vehicleSelectFun(event, destination)}
        />
      </div>
    )
  }

  export default Vehicles
