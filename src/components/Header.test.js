import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

afterEach(cleanup);

function renderHeader(args) {
  let defaultProps = {
    location: "",
    errors: {},
  };

  const props = { ...defaultProps, ...args };

  return render(
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>
  );
}

it("renders without crashing", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders an h2 with content Starwars app", () => {
  const { getByTestId } = renderHeader();

  expect(getByTestId("headerh2")).toHaveTextContent("Starwars app");
});
