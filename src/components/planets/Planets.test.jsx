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
      vehicleClass='vehicleRadioButton1'
      selectedVehicle='Space Pot'
      options={[{value: "Mangal", label: "Mangal"},{value: "Earth", label: "Earth"}, {value: "Leoine", label: "Leoine"}]}
      vehicles={[{value:"Space pot", label:"Space pot (2)"},{ value:"Rocket", label:"Rocket (1)"}]}
      allProps={planetSelect => {() => {}}, vehicleSelect => {() => {}}}
      />, container);
  });
  expect(container).toMatchSnapshot();
});
