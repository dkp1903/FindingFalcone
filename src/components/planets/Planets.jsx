import React, {Component} from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Vehicles from '.././vehicles/Vehicles.jsx';

const Planets = (props) => {
  const propTypes = {
    vehicleClass: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedVehicle: PropTypes.string.isRequired,
  }
  const {destination, vehicleClass, options} = props;
  const {planetSelect, vehicleSelect} = props.allProps;
  
    
    return (
      <div>
        <h4>{destination}</h4>
        <Select
          
          name={"select"+vehicleClass}
          options={options}
          onChange={ (event) => planetSelect(event, destination)}
        />
        <Vehicles vehicleSelectFun={vehicleSelect} allProps={props} />
      </div>
    )

}

export default Planets
