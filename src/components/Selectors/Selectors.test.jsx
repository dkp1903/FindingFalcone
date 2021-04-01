import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Selectors from "./Selectors.jsx";

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
let planetObj = {
  state: {
    vehSelection1: "",
    vehSelection2: "",
    vehSelection3: "",
    vehSelection4: "",
    planetSelection1: "PlanetB",
    planetSelection2: "Mars",
    planetSelection3: "",
    planetSelection4: "PlanetC",
    planets: [{name: "PlanetA", label: "PlanetA"},
              {name: "PlanetB", label: "PlanetB"}, 
              {name: "PlanetC", label: "PlanetC"}],
    vehicles: [{value:"VehicleB", label:"VehicleB (2)"},
                { value:"VehicleA", label:"VehicleA (1)"}],
    planetDistance: {"PlanetB": 200}
  }
}

it("check render", () => {

  act(() => {
    render(<Selectors
      self={planetObj}
      planetSelect={() => {}}
      vehicleSelect={() => {}}
      />, container);
  });
  expect(container).toMatchSnapshot();
});
