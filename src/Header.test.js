import React from "react";
import Header from "./Header";
import { render, screenshot } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Header />);
});
