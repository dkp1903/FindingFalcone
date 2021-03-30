import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DestinationVehicles.scss';
import Planets from '.././planets/Planets.jsx';
import { utilFunctions } from '../../utils/util.js';

const DestinationVehicles = (props) => {

  const {self} = props;
  const {selectedVehicle1, selectedPlanet1,selectedVehicle2, selectedPlanet2,selectedVehicle3, selectedPlanet3,selectedVehicle4, selectedPlanet4 } = props.self.state;
 
  
     return (
      <div>
        <Planets
          destination='Destination1'
          vehicleClass='vehicleRadioButton1'
          selectedVehicle={selectedVehicle1}
          options={utilFunctions.planetObject(selectedPlanet1, self)}
          vehicles={selectedPlanet1 ? utilFunctions.getFilteredVehicles('Destination1', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination2'
          vehicleClass='vehicleRadioButton2'
          selectedVehicle={selectedVehicle2}
          options={utilFunctions.planetObject(selectedPlanet2, self)}
          vehicles={selectedPlanet2 ? utilFunctions.getFilteredVehicles('Destination2', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination3'
          vehicleClass='vehicleRadioButton3'
          selectedVehicle={selectedVehicle3}
          options={utilFunctions.planetObject(selectedPlanet3, self)}
          vehicles={selectedPlanet3 ? utilFunctions.getFilteredVehicles('Destination3', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination4'
          vehicleClass='vehicleRadioButton4'
          selectedVehicle={selectedVehicle4}
          options={utilFunctions.planetObject(selectedPlanet4, self)}
          vehicles={selectedPlanet4 ? utilFunctions.getFilteredVehicles('Destination4', self) : []}
          allProps={props}
        />
        <div className="count"><h2>Time Taken: {utilFunctions.getCount(self.state)} </h2></div>
      </div>
    );
  }


DestinationVehicles.propTypes = {
  planetSelect: PropTypes.func.isRequired,
  vehicleSelect: PropTypes.func.isRequired,
}

export default DestinationVehicles