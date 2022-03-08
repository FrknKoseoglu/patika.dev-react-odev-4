import React from "react";
import filterEmoji from "./filterEmoji";
import { render, screenshot } from "@testing-library/react";

it("renders without crashing", () => {
  render(<filterEmoji />);
});
