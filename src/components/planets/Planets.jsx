import React, {Component} from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Vehicles from '.././vehicles/Vehicles.jsx';

const Planets = (props) => {
  
  const {destination, vehicleClass, options} = props;
  const {planetSelect, vehicleSelect} = props.allProps;
  
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      backgroundColor: 'black',
      color: state.isSelected ? 'green' : 'white',
      padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }
    
    return (
      <div>
        <h4>{destination}</h4>
        <Select
          
          name={"select"+vehicleClass}
          options={options}
          styles={customStyles}
          onChange={ (event) => planetSelect(event, destination)}
        />
        <Vehicles vehicleSelectFun={vehicleSelect} allProps={props} />
      </div>
    )

}

Planets.propTypes = {
  vehicleClass: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedVehicle: PropTypes.string.isRequired,
}
export default Planets
