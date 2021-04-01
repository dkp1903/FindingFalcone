import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Result from "./Result.jsx";

let container = null;

beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("check render", () => {
  act(() => {
    render(<Result count={200} planetName="PlanetB" />, container);
  });
  expect(container).toMatchSnapshot();
});
