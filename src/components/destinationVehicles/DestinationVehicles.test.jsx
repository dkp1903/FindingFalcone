import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DestinationVehicles from "./DestinationVehicles.jsx";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
let dummyObject = {
  state: {
    selectedVehicle1: "",
    selectedVehicle2: "",
    selectedVehicle3: "",
    selectedVehicle4: "",
    selectedPlanet1: "Earth",
    selectedPlanet2: "Mars",
    selectedPlanet3: "",
    selectedPlanet4: "Leoine",
    planets: [{name: "Mangal", label: "Mangal"},{name: "Earth", label: "Earth"}, {name: "Leoine", label: "Leoine"}],
    vehicles: [{value:"Space pot", label:"Space pot (2)"},{ value:"Rocket", label:"Rocket (1)"}],
    planetDistance: {"Earth": 200}
  }
}

it("renders successfully with props", () => {

  act(() => {
    render(<DestinationVehicles
      self={dummyObject}
      planetSelect={() => {}}
      vehicleSelect={() => {}}
      />, container);
  });
  expect(container).toMatchSnapshot();
});
