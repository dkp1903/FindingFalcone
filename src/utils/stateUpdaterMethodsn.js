import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Result from '.././components/Result/Result.jsx';
import { getter, poster } from './services/apiCalls'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

export const stateMethods = {
 

  planetDistanceJson: (planetDistanceData) => {
    const pDistance = {};
    planetDistanceData.forEach((element) => {
      pDistance[element.name] = element.distance
    });
    return pDistance;
  },

  vehicleSpeedJson: (vehicleSpeedData) => {
    const vSpeed = {};
    vehicleSpeedData.forEach((element) => {
      vSpeed[element.name] = {"speed": element.speed, "distance": element.max_distance}
    });
    return vSpeed;
  },

  getCount: (state) => {
    let count = 0;
    const {planSelection1, planSelection2, planSelection3, planSelection4, vehSelection1, vehSelection2, vehSelection3, vehSelection4, vehiclesSpeed, planetDistance}= state;
    if(vehSelection1) {
      count += planetDistance[planSelection1] / vehiclesSpeed[vehSelection1].speed;
    }
    if(vehSelection2) {
      count += planetDistance[planSelection2] / vehiclesSpeed[vehSelection2].speed;;
    }
    if(vehSelection3) {
      count += planetDistance[planSelection3] / vehiclesSpeed[vehSelection3].speed;;
    }
    if(vehSelection4) {
      count += planetDistance[planSelection4] / vehiclesSpeed[vehSelection4].speed;;
    }
    return count;
  },

  setOriginalVehicle: (vehicles) => {
    return vehicles.map(vehicle => {return {...vehicle}});
  },

  resetDestinationVehicles: (Selectors, vehSelection, commonState) => {
    commonState.setState ({
      [Selectors]: stateMethods.setOriginalVehicle(commonState.state.vehicles),
      [vehSelection]: '',
    });
  },

  reduceVehicleCount: (vehicles, vehicleName, commonState) => {
		const {vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
		return vehicles.map(vehicleObj => {
			if(vehicleObj.name === vehicleName) {
				vehicleObj.totalNumber--;
			}
			if(vehicleObj.name === vehSelection1){
				vehicleObj.totalNumber--;
				if(vehicleObj.totalNumber === -1){
					vehicleObj.totalNumber = 0;
					stateMethods.resetDestinationVehicles('destination1Vehicles', 'vehSelection1', commonState);
				}
			}
			if(vehicleObj.name === vehSelection2){
				vehicleObj.totalNumber--;
				if(vehicleObj.totalNumber === -1){
					vehicleObj.totalNumber = 0;
					stateMethods.resetDestinationVehicles('destination2Vehicles', 'vehSelection2', commonState);
				}
			}
			if(vehicleObj.name === vehSelection3){
				vehicleObj.totalNumber--;
				if(vehicleObj.totalNumber === -1){
					vehicleObj.totalNumber = 0;
					stateMethods.resetDestinationVehicles('destination3Vehicles', 'vehSelection3', commonState);
				}
			}
			if(vehicleObj.name === vehSelection4){
				vehicleObj.totalNumber--;
				if(vehicleObj.totalNumber === -1){
					vehicleObj.totalNumber = 0;
					stateMethods.resetDestinationVehicles('destination4Vehicles', 'vehSelection4', commonState);
				}
			}
			return vehicleObj
		});
	},

  getVehiclesObject: (Selectors, planSelection, vehSelection, commonState) => {
		if(vehSelection.length) {
			return Selectors.map(vehicle => {
				if(vehicle.max_distance < commonState.state.planetDistance[planSelection] || (vehicle.totalNumber === 0 && vehicle.name !== vehSelection)) {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.totalNumber})`, itemClassName:"disabled" }
				} else {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.totalNumber})`}
				}
			});
		} else {
			const {vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
			return commonState.state.vehicles.map(vehiclel => {
				const vehicle = {...vehiclel};
				if(vehSelection1 === vehicle.name) {
					vehicle.totalNumber--;
				}
				if(vehSelection2 === vehicle.name) {
					vehicle.totalNumber--;
				}
				if(vehSelection3 === vehicle.name) {
					vehicle.totalNumber--;
				}
				if(vehSelection4 === vehicle.name) {
					vehicle.totalNumber--;
				}

				if(vehicle.max_distance < commonState.state.planetDistance[planSelection] || vehicle.totalNumber === 0) {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.totalNumber})`, itemClassName:"disabled" }
				} else {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.totalNumber})` }
				}
			});
		}
	},

  getFilteredVehicles: (destination, commonState) => {
    switch(destination) {
      case 'Destination1':
        return stateMethods.getVehiclesObject(commonState.state.destination1Vehicles, commonState.state.planSelection1, commonState.state.vehSelection1, commonState);
      case 'Destination2':
        return stateMethods.getVehiclesObject(commonState.state.destination2Vehicles, commonState.state.planSelection2, commonState.state.vehSelection2, commonState);
      case 'Destination3':
        return stateMethods.getVehiclesObject(commonState.state.destination3Vehicles, commonState.state.planSelection3, commonState.state.vehSelection3, commonState);
      case 'Destination4':
        return stateMethods.getVehiclesObject(commonState.state.destination4Vehicles, commonState.state.planSelection4, commonState.state.vehSelection4, commonState);
      default:
        return commonState.state.vehicles.map(vehicle => ({value:vehicle.name, label:`${vehicle.name} (${vehicle.totalNumber})`}));
    }
  },

  planetObject(selPlanet, commonState) {
    const {planSelection1, planSelection2, planSelection3, planSelection4} = commonState.state;
    let pValue = '';
    const planets = commonState.state.planets.map(planet => {
      pValue = planet.name;
      if(pValue === selPlanet) {
         return { value: pValue, label: pValue }
      } else if(pValue !== planSelection1 && pValue !== planSelection2 && pValue!== planSelection3 && pValue !== planSelection4) {
         return { value: pValue, label: pValue }
      } else {
        return {};
      }
    });
    return planets.filter(value => Object.keys(value).length !== 0);;
  },

  errorNotification: (error) => {
    NotificationManager.info(error, 'Incorrect selection. Please retry', 3000
    )
  },

  submitJson: async (commonState) => {
    
    const { planSelection1, planSelection2, planSelection3, planSelection4, vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
    if(planSelection1 !== '' && planSelection2 !== '' && planSelection3 !== '' && planSelection4 !== '' && vehSelection1 !== '' && vehSelection2 !== '' && vehSelection3 !== '' && vehSelection4 !== '') {
      const tokenData = await poster('token', {})
      const data = await poster('find',
          {
              "token": tokenData.token,
              "planet_names": [planSelection1, planSelection2, planSelection3, planSelection4],
              "vehicle_names": [vehSelection1, vehSelection2, vehSelection3, vehSelection4]
          })
            
         
          ReactDOM.render(
           
            <Result status={data.status} count={stateMethods.getCount(commonState.state)} planetName={data.planet_name} />, document.getElementById('root')
          
          );

      
      }else {
       stateMethods.errorNotification('Incorrect selection error.')
      }
  },


  getDestinationAndVehiclesJson: async (commonState) => {

        const planetData = await getter('planets')
        commonState.setState({
            planets: planetData,
            planetDistance: stateMethods.planetDistanceJson(planetData),
    })
   
		const vehicleData = await getter('vehicles')
			
				commonState.setState ({
					vehicles: vehicleData,
					vehiclesSpeed: stateMethods.vehicleSpeedJson(vehicleData),
				});
			
  },

  async updateVehicleObject(vehSelection, Selectors, event, commonState) {
		if(commonState.state[vehSelection].length) {
			await commonState.setState ({
				[Selectors]: stateMethods.setOriginalVehicle(commonState.state.vehicles),
				[vehSelection]: '',
			});
		}
		commonState.setState ({
			[vehSelection]: event,
			[Selectors]: stateMethods.reduceVehicleCount(commonState.state[Selectors], event, commonState),
		});
	}

}
