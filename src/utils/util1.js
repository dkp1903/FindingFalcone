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
    const {selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4, selectedVehicle1, selectedVehicle2, selectedVehicle3, selectedVehicle4, vehiclesSpeed, planetDistance}= state;
    if(selectedVehicle1) {
      count += planetDistance[selectedPlanet1] / vehiclesSpeed[selectedVehicle1].speed;
    }
    if(selectedVehicle2) {
      count += planetDistance[selectedPlanet2] / vehiclesSpeed[selectedVehicle2].speed;;
    }
    if(selectedVehicle3) {
      count += planetDistance[selectedPlanet3] / vehiclesSpeed[selectedVehicle3].speed;;
    }
    if(selectedVehicle4) {
      count += planetDistance[selectedPlanet4] / vehiclesSpeed[selectedVehicle4].speed;;
    }
    return count;
  },

  setOriginalVehicle: (vehicles) => {
    return vehicles.map(vehicle => {return {...vehicle}});
  },

  resetDestinationVehicles: (destinationVehicles, selectedVehicle, commonState) => {
    commonState.setState ({
      [destinationVehicles]: utilFunctions.setOriginalVehicle(commonState.state.vehicles),
      [selectedVehicle]: '',
    });
  },

  decreaseVehicleNumber: (vehicles, vehicleName, commonState) => {
		const {selectedVehicle1, selectedVehicle2, selectedVehicle3, selectedVehicle4} = commonState.state;
		return vehicles.map(vehicleObj => {
			if(vehicleObj.name === vehicleName) {
				vehicleObj.total_no -=1;
			}
			if(vehicleObj.name === selectedVehicle1){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination1Vehicles', 'selectedVehicle1', commonState);
				}
			}
			if(vehicleObj.name === selectedVehicle2){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination2Vehicles', 'selectedVehicle2', commonState);
				}
			}
			if(vehicleObj.name === selectedVehicle3){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination3Vehicles', 'selectedVehicle3', commonState);
				}
			}
			if(vehicleObj.name === selectedVehicle4){
				vehicleObj.total_no -=1;
				if(vehicleObj.total_no === -1){
					vehicleObj.total_no = 0;
					utilFunctions.resetDestinationVehicles('destination4Vehicles', 'selectedVehicle4', commonState);
				}
			}
			return vehicleObj
		});
	},

  getVehiclesObject: (destinationVehicles, selectedPlanet, selectedVehicle, commonState) => {
		if(selectedVehicle.length) {
			return destinationVehicles.map(vehicle => {
				if(vehicle.max_distance < commonState.state.planetDistance[selectedPlanet] || (vehicle.total_no === 0 && vehicle.name !== selectedVehicle)) {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`, itemClassName:"disabled" }
				} else {
					return { value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`}
				}
			});
		} else {
			const {selectedVehicle1, selectedVehicle2, selectedVehicle3, selectedVehicle4} = commonState.state;
			return commonState.state.vehicles.map(vehiclel => {
				const vehicle = {...vehiclel};
				if(selectedVehicle1 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(selectedVehicle2 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(selectedVehicle3 === vehicle.name) {
					vehicle.total_no -= 1;
				}
				if(selectedVehicle4 === vehicle.name) {
					vehicle.total_no -= 1;
				}

				if(vehicle.max_distance < commonState.state.planetDistance[selectedPlanet] || vehicle.total_no === 0) {
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
        return utilFunctions.getVehiclesObject(commonState.state.destination1Vehicles, commonState.state.selectedPlanet1, commonState.state.selectedVehicle1, commonState);
      case 'Destination2':
        return utilFunctions.getVehiclesObject(commonState.state.destination2Vehicles, commonState.state.selectedPlanet2, commonState.state.selectedVehicle2, commonState);
      case 'Destination3':
        return utilFunctions.getVehiclesObject(commonState.state.destination3Vehicles, commonState.state.selectedPlanet3, commonState.state.selectedVehicle3, commonState);
      case 'Destination4':
        return utilFunctions.getVehiclesObject(commonState.state.destination4Vehicles, commonState.state.selectedPlanet4, commonState.state.selectedVehicle4, commonState);
      default:
        return commonState.state.vehicles.map(vehicle => ({value:vehicle.name, label:`${vehicle.name} (${vehicle.total_no})`}));
    }
  },

  async planetObject(selPlanet, commonState) {
    const {selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4} = await commonState.state;
    //const { planets } = await commonState.state
    //console.log('Error here : ', commonState.state.planets[0])
    let pValue = '';
    const planets = commonState.state.planets.map(planet => {
      pValue = planet.name;
      if(pValue === selPlanet) {
         return { value: pValue, label: pValue }
      } else if(pValue !== selectedPlanet1 && pValue !== selectedPlanet2 && pValue!== selectedPlanet3 && pValue !== selectedPlanet4) {
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
    const { selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4, selectedVehicle1, selectedVehicle2, selectedVehicle3, selectedVehicle4} = commonState.state;
    if(selectedPlanet1 !== '' && selectedPlanet2 !== '' && selectedPlanet3 !== '' && selectedPlanet4 !== '' && selectedVehicle1 !== '' && selectedVehicle2 !== '' && selectedVehicle3 !== '' && selectedVehicle4 !== '') {
      axios.post('https://findfalcone.herokuapp.com/token', {} , { headers: headers })
        .then((response) => {
          axios.post('https://findfalcone.herokuapp.com/find',
            {
              "token": response.data.token,
              "planet_names": [selectedPlanet1, selectedPlanet2, selectedPlanet3, selectedPlanet4],
              "vehicle_names": [selectedVehicle1, selectedVehicle2, selectedVehicle3, selectedVehicle4]
            }, { headers: headers })
            .then((response) => {
              if(response.data.status === "false") {
                throw "Please send the Request again or change the Planets and vehicle, Falcone didn't find"
              }
              ReactDOM.render(
                <Result count={utilFunctions.getCount(commonState.state)} planetName={response.data.planet_name} />, document.getElementById('new-root')
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

  async updateVehicleObject(selectedVehicle, destinationVehicles, event, commonState) {
		if(commonState.state[selectedVehicle].length) {
			await commonState.setState ({
				[destinationVehicles]: utilFunctions.setOriginalVehicle(commonState.state.vehicles),
				[selectedVehicle]: '',
			});
		}
		commonState.setState ({
			[selectedVehicle]: event,
			[destinationVehicles]: utilFunctions.decreaseVehicleNumber(commonState.state[destinationVehicles], event, commonState),
		});
	}

}