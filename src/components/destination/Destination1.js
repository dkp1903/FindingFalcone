import React, { Component, useState, useEffect } from 'react';
import './Destination.scss';
import {utilFunctions} from '../../utils/util.js'
import DestinationVehicles from '.././destinationVehicles/DestinationVehicles.jsx';
import Header from '../Header/Header'

const Destination = (props) => {

		const [state, setState] = useState({
			planets: [],
			vehicles: [],
			selectedPlanet1: '',
			selectedPlanet2: '',
			selectedPlanet3: '',
			selectedPlanet4: '',
			selectedVehicle1: '',
			selectedVehicle2: '',
			selectedVehicle3: '',
			selectedVehicle4: '',
			destination1Vehicles: [],
			destination2Vehicles: [],
			destination3Vehicles: [],
			destination4Vehicles: [],
			vehiclesSpeed: {},
			planetDistance: {},
		})
        const commonState = {
            state: state,
            setState: setState
        }

	useEffect(() => {
		
		utilFunctions.getDestinationAndVehiclesJson(commonState);
	}, [state])

	const vehicleSelect = (event, destination) => {
		switch (destination) {
			case 'Destination1':
				utilFunctions.updateVehicleObject('selectedVehicle1', 'destination1Vehicles', event, commonState);
				break;
			case 'Destination2':
				utilFunctions.updateVehicleObject('selectedVehicle2', 'destination2Vehicles', event, commonState);
				break;
			case 'Destination3':
				utilFunctions.updateVehicleObject('selectedVehicle3', 'destination3Vehicles', event, commonState);
				break;
			case 'Destination4':
				utilFunctions.updateVehicleObject('selectedVehicle4', 'destination4Vehicles', event, commonState);
				break;
			default:
		}
	}

	const planetSelect = (event, destination) => {
		let vehicles = utilFunctions.setOriginalVehicle(state.vehicles);
		switch(destination) {
			case 'Destination1':
				setState ({
					selectedPlanet1: event.value,
					destination1Vehicles: vehicles,
					selectedVehicle1: '',
				});
				break;
			case 'Destination2':
				setState ({
					selectedPlanet2: event.value,
					destination2Vehicles: vehicles,
					selectedVehicle2: '',
				});
				break;
			case 'Destination3':
				setState ({
					selectedPlanet3: event.value,
					destination3Vehicles: vehicles,
					selectedVehicle3: '',
				});
				break;
			case 'Destination4':
				setState ({
					selectedPlanet4: event.value,
					destination4Vehicles: vehicles,
					selectedVehicle4: '',
				});
				break;
			default:
				break;
		}
	}

	
		return (
			<div id='main_container'>
				<div className="header">
			  		<Header />
					<div className="planet-message">
						<p>Select planets you want to search in: </p>
					</div>
				</div>

				<div className="des_select">
				<DestinationVehicles self={commonState} planetSelect={planetSelect} vehicleSelect={vehicleSelect} />
				</div>

				<div className="footer">
					<button type="button" onClick={() => utilFunctions.submitJson(commonState)} >Find Falcone!</button>
				</div>
			</div>
		);
	
}

export default Destination
