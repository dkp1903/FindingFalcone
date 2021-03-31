import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Result from '.././components/result/Result.jsx';

export const  utilFunctions = {
  geekTrustHome: () => {
    window.location = "https://www.geektrust.in";
  },

  planetDistanceJson: (data) => {
    const pDistance = {};
    data.forEach((obj) => {
      pDistance[obj.name] = obj.distance
    });
    return pDistance;
  },

  vehicleSpeedJson: (data) => {
    const vSpeed = {};
    data.forEach((obj) => {
      vSpeed[obj.name] = {"speed": obj.speed, "distance": obj.max_distance}
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
      [Selectors]: utilFunctions.setOriginalVehicle(commonState.state.vehicles),
      [vehSelection]: '',
    });
  },

  decreaseVehicleNumber: (vehicles, vehicleName, commonState) => {
		const {vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
		return vehicles.map(vehicleObj => {
			if(vehicleObj.name === vehicleName) {
				vehicleObj.total_no -=1;
			}
			if(vehicleObj.name === vehSelection1){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination1Vehicles', 'vehSelection1', commonState);
				}
			}
			if(vehicleObj.name === vehSelection2){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination2Vehicles', 'vehSelection2', commonState);
				}
			}
			if(vehicleObj.name === vehSelection3){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination3Vehicles', 'vehSelection3', commonState);
				}
			}
			if(vehicleObj.name === vehSelection4){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination4Vehicles', 'vehSelection4', commonState);
				}
			}
			return vehicleObj
		});
	},

  getVehiclesObject: (Selectors, planSelection, vehSelection, commonState) => {
		if(vehSelection.length) {
			return Selectors.map(vehicle => {
				if(vehicle.max_distance < commonState.state.planetDistance[planSelection] || (vehicle.total_no === 0 && vehicle.name !== vehSelection)) {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`, itemClassName:"disabled" }
				} else {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`}
				}
			});
		} else {
			const {vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
			return commonState.state.vehicles.map(vehiclel => {
				const vehicle = {...vehiclel};
				if(vehSelection1 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(vehSelection2 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(vehSelection3 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(vehSelection4 === vehicle.name) {
					vehicle.total_no -= 1;
				}

				if(vehicle.max_distance < commonState.state.planetDistance[planSelection] || vehicle.total_no === 0) {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`, itemClassName:"disabled" }
				} else {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})` }
				}
			});
		}
	},

  getFilteredVehicles: (destination, commonState) => {
    switch(destination) {
      case 'Destination1':
        return utilFunctions.getVehiclesObject(commonState.state.destination1Vehicles, commonState.state.planSelection1, commonState.state.vehSelection1, commonState);
      case 'Destination2':
        return utilFunctions.getVehiclesObject(commonState.state.destination2Vehicles, commonState.state.planSelection2, commonState.state.vehSelection2, commonState);
      case 'Destination3':
        return utilFunctions.getVehiclesObject(commonState.state.destination3Vehicles, commonState.state.planSelection3, commonState.state.vehSelection3, commonState);
      case 'Destination4':
        return utilFunctions.getVehiclesObject(commonState.state.destination4Vehicles, commonState.state.planSelection4, commonState.state.vehSelection4, commonState);
      default:
        return commonState.state.vehicles.map(vehicle => ({value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`}));
    }
  },

  async planetObject(selPlanet, commonState) {
    const {planSelection1, planSelection2, planSelection3, planSelection4} = await commonState.state;
    //const { planets } = await commonState.state
    //console.log('Error here : ', commonState.state.planets[0])
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


  submitJson: (commonState) => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    }
    const { planSelection1, planSelection2, planSelection3, planSelection4, vehSelection1, vehSelection2, vehSelection3, vehSelection4} = commonState.state;
    if(planSelection1 !== '' && planSelection2 !== '' && planSelection3 !== '' && planSelection4 !== '' && vehSelection1 !== '' && vehSelection2 !== '' && vehSelection3 !== '' && vehSelection4 !== '') {
      axios.post('https://findfalcone.herokuapp.com/token', {} , { headers: headers })
        .then((response) => {
          axios.post('https://findfalcone.herokuapp.com/find',
            {
              "token": response.data.token,
              "planet_names": [planSelection1, planSelection2, planSelection3, planSelection4],
              "vehicle_names": [vehSelection1, vehSelection2, vehSelection3, vehSelection4]
            }, { headers: headers })
            .then((response) => {
              if(response.data.status === "false") {
                throw "Please send the Request again or change the Planets and vehicle, Falcone didn't find"
              }
              ReactDOM.render(
                <Result count={utilFunctions.getCount(commonState.state)} planetName={response.data.planet_name} />, document.getElementById('root')
              );
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        })
      }else {
        alert('Please select 4 planets and 4 vehicles');
      }
  },


  getDestinationAndVehiclesJson: (commonState) => {
    axios.get('https://findfalcone.herokuapp.com/planets')
			.then((response) => {
  				commonState.setState ({
  					planets: response.data,
  					planetDistance: utilFunctions.planetDistanceJson(response.data),
  				})
			})
			.catch((error) => {
        alert(error.message);
			});

		axios.get('https://findfalcone.herokuapp.com/vehicles')
			.then((response) => {
				commonState.setState ({
					vehicles: response.data,
					vehiclesSpeed: utilFunctions.vehicleSpeedJson(response.data),
				});
			})
			.catch((error) => {
        alert(error.message);
			});
  },

  async updateVehicleObject(vehSelection, Selectors, event, commonState) {
		if(commonState.state[vehSelection].length) {
			await commonState.setState ({
				[Selectors]: utilFunctions.setOriginalVehicle(commonState.state.vehicles),
				[vehSelection]: '',
			});
		}
		commonState.setState ({
			[vehSelection]: event,
			[Selectors]: utilFunctions.decreaseVehicleNumber(commonState.state[Selectors], event, commonState),
		});
	}

}
