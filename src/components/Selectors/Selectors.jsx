import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Selectors.scss';
import Planets from '.././Planets/Planets.jsx';
import { stateMethods } from '../../utils/stateUpdaterMethods.js';

const Selectors = (props) => {

  const {self} = props;
  const {vehSelection1, planSelection1,vehSelection2, planSelection2,vehSelection3, planSelection3,vehSelection4, planSelection4 } = props.self.state;
 
  
     return (
      <div>
      <div className="count"><span>Time :{stateMethods.getCount(self.state)} </span></div>
        <Planets
          destination='Destination1'
          vehicleClass='radBtn1'
          vehSelection={vehSelection1}
          options={stateMethods.planetObject(planSelection1, self)}
          vehicles={planSelection1 ? stateMethods.getFilteredVehicles('Destination1', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination2'
          vehicleClass='radBtn2'
          vehSelection={vehSelection2}
          options={stateMethods.planetObject(planSelection2, self)}
          vehicles={planSelection2 ? stateMethods.getFilteredVehicles('Destination2', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination3'
          vehicleClass='radBtn3'
          vehSelection={vehSelection3}
          options={stateMethods.planetObject(planSelection3, self)}
          vehicles={planSelection3 ? stateMethods.getFilteredVehicles('Destination3', self) : []}
          allProps={props}
        />
        <Planets
          destination='Destination4'
          vehicleClass='radBtn4'
          vehSelection={vehSelection4}
          options={stateMethods.planetObject(planSelection4, self)}
          vehicles={planSelection4 ? stateMethods.getFilteredVehicles('Destination4', self) : []}
          allProps={props}
        />
        
      </div>
    );
  }


Selectors.propTypes = {
  planetSelect: PropTypes.func.isRequired,
  vehicleSelect: PropTypes.func.isRequired,
}

export default Selectors