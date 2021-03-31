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
  vehicleClass:"radBtn1",
  vehicles: [{value:"VehicleB", label:"VehicleB (2)"},{ value:"VehicleA", label:"VehicleA (1)"}],
  vehSelection: "VehicleA"
}

it("renders successfully with props", () => {

  act(() => {
    render(<Vehicles
      vehicleSelectFun={() => {}}
      allProps={propObject} />, container);
  });
  expect(container).toMatchSnapshot();
});
