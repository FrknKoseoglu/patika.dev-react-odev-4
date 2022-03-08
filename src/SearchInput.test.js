import React from "react";
import SearchInput from "./SearchInput";
import { render, screenshot } from "@testing-library/react";

it("renders without crashing", () => {
  afterEach(() => {
    render(<SearchInput />);
  });
});
