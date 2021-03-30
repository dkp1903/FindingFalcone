import React, { Component } from 'react';
import './Destination.scss';
import {utilFunctions} from '../../utils/util.js'
import DestinationVehicles from '.././destinationVehicles/DestinationVehicles.jsx';

export default class Destination extends Component {
	constructor(props) {
		super(props);
		this.planetSelect = this.planetSelect.bind(this);
		this.vehicleSelect = this.vehicleSelect.bind(this);
		this.state = {
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
		}
	}

	componentDidMount() {
		utilFunctions.getDestinationAndVehiclesJson(this);
	}

	vehicleSelect (event, destination) {
		switch (destination) {
			case 'Destination1':
				utilFunctions.updateVehicleObject('selectedVehicle1', 'destination1Vehicles', event, this);
				break;
			case 'Destination2':
				utilFunctions.updateVehicleObject('selectedVehicle2', 'destination2Vehicles', event, this);
				break;
			case 'Destination3':
				utilFunctions.updateVehicleObject('selectedVehicle3', 'destination3Vehicles', event, this);
				break;
			case 'Destination4':
				utilFunctions.updateVehicleObject('selectedVehicle4', 'destination4Vehicles', event, this);
				break;
			default:
		}
	}

	planetSelect(event, destination) {
		let vehicles = utilFunctions.setOriginalVehicle(this.state.vehicles);
		switch(destination) {
			case 'Destination1':
				this.setState ({
					selectedPlanet1: event.value,
					destination1Vehicles: vehicles,
					selectedVehicle1: '',
				});
				break;
			case 'Destination2':
				this.setState ({
					selectedPlanet2: event.value,
					destination2Vehicles: vehicles,
					selectedVehicle2: '',
				});
				break;
			case 'Destination3':
				this.setState ({
					selectedPlanet3: event.value,
					destination3Vehicles: vehicles,
					selectedVehicle3: '',
				});
				break;
			case 'Destination4':
				this.setState ({
					selectedPlanet4: event.value,
					destination4Vehicles: vehicles,
					selectedVehicle4: '',
				});
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div id='main_div'>
				<div className="header">
			  		<div>
			  			<div className="title">
							<h1>Finding Falcone! </h1>
						</div>
						<div className="header-options">
							<div className="reset">
								<span onClick={() => window.location.reload()}>Reset</span>
								<span>  |  </span>
								<span className="geekspage" onClick={() => utilFunctions.geekTrustHome()}> Geeks Trust Home </span>
							</div>
						</div>
					</div>
					<div className="planet-message">
						<p>Select planets you want to search in: </p>
					</div>
				</div>

				<div className="des_select">
					<DestinationVehicles self={this} planetSelect={this.planetSelect} vehicleSelect={this.vehicleSelect} />
				</div>

				<div className="footer">
					<button type="button" onClick={() => utilFunctions.submitJson(this)} >Find Falcone!</button>
				</div>
			</div>
		);
	}
}
