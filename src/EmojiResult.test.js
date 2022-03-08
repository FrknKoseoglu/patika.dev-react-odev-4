import React from "react";
import EmojiResult from "./EmojiResults";
import { render, screenshot } from "@testing-library/react";

it("renders without crashing", () => {
  render(<EmojiResult />);
});
