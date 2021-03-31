import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Planets from "./Planets.jsx";

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


it("renders successfully with props", () => {

  act(() => {
    render(<Planets
      destination='Destination1'
      vehicleClass='radBtn'
      vehSelection='VehicleB'
      options={[{value: "PlanetA", label: "PlanetA"},{value: "PlanetB", label:"PlanetB"}, {value: "PlanetC", label: "PlanetC"}]}
      vehicles={[{value:"VehicleB", label:"VehicleB (2)"},{ value:"VehicleA", label:"VehicleA (1)"}]}
      allProps={planetSelect => {() => {}}, vehicleSelect => {() => {}}}
      />, container);
  });
  expect(container).toMatchSnapshot();
});
