import React from "react";
import EmojiResultRow from "./EmojiResultRow";
import { render, screenshot } from "@testing-library/react";

it("renders without crashing", () => {
  render(<EmojiResultRow />);
});
