import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Vehicles from "./Vehicles.jsx";

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

let propObject = {
  destination:"Destination1",
  vehicleClass:"vehicleRadioButton1",
  vehicles: [{value:"Space pot", label:"Space pot (2)"},{ value:"Rocket", label:"Rocket (1)"}],
  selectedVehicle: "Rocket"
}

it("renders successfully with props", () => {

  act(() => {
    render(<Vehicles
      vehicleSelectFun={() => {}}
      allProps={propObject} />, container);
  });
  expect(container).toMatchSnapshot();
});
