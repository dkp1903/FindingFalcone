import React, { Component } from 'react';
import './Main.scss';
import {stateMethods} from '../../utils/stateUpdaterMethods.js'
import Selectors from '.././Selectors/Selectors.jsx';
import Header from '../Header/Header'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Footer from '../Footer/Footer'

class Main extends Component {
	constructor(props) {
		super(props);
		this.planetSelect = this.planetSelect.bind(this);
		this.vehicleSelect = this.vehicleSelect.bind(this);
		this.state = {
			planets: [],
			vehicles: [],
			planSelection1: '',
			planSelection2: '',
			planSelection3: '',
			planSelection4: '',
			vehSelection1: '',
			vehSelection2: '',
			vehSelection3: '',
			vehSelection4: '',
			destination1Vehicles: [],
			destination2Vehicles: [],
			destination3Vehicles: [],
			destination4Vehicles: [],
			vehiclesSpeed: {},
			planetDistance: {},
		}
	}

	componentDidMount() {
		stateMethods.getDestinationAndVehiclesJson(this);
	}

	vehicleSelect (event, destination) {
		switch (destination) {
			case 'Destination1':
				console.log('Goes into dest1')
				stateMethods.updateVehicleObject('vehSelection1', 'destination1Vehicles', event, this);
				break;
			case 'Destination2':
				stateMethods.updateVehicleObject('vehSelection2', 'destination2Vehicles', event, this);
				break;
			case 'Destination3':
				stateMethods.updateVehicleObject('vehSelection3', 'destination3Vehicles', event, this);
				break;
			case 'Destination4':
				stateMethods.updateVehicleObject('vehSelection4', 'destination4Vehicles', event, this);
				break;
			default:
		}
	}

	planetSelect(event, destination) {
		let vehicles = stateMethods.setOriginalVehicle(this.state.vehicles);
		switch(destination) {
			case 'Destination1':
				this.setState ({
					planSelection1: event.value,
					destination1Vehicles: vehicles,
					vehSelection1: '',
				});
				break;
			case 'Destination2':
				this.setState ({
					planSelection2: event.value,
					destination2Vehicles: vehicles,
					vehSelection2: '',
				});
				break;
			case 'Destination3':
				this.setState ({
					planSelection3: event.value,
					destination3Vehicles: vehicles,
					vehSelection3: '',
				});
				break;
			case 'Destination4':
				this.setState ({
					planSelection4: event.value,
					destination4Vehicles: vehicles,
					vehSelection4: '',
				});
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div id='container'>
					<NotificationContainer />
					<div className="header">
						<Header />
						
						<div className="hint">
							<p>Be careful in what you choose :}</p>
						</div>
					</div>

					<div className="select">
						<Selectors self={this} planetSelect={this.planetSelect} vehicleSelect={this.vehicleSelect} />
					</div>
					
					<div className="go-button">
						<button type="button" onClick={() => stateMethods.submitJson(this)} >Go!</button>
					</div>
					<div className="footer">
						<Footer />
					</div>
			</div>
		);
	}
}

export default Main
