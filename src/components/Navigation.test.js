import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import Navigation from "./Navigation";

afterEach(cleanup);

//test that component renders
it("renders without crashing", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

//it renders links
it("renders home link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});

it("renders species link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Species");
  expect(linkElement).toBeInTheDocument();
});

it("renders Planes link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Planets");
  expect(linkElement).toBeInTheDocument();
});

it("renders Favorites link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Favorites");
  expect(linkElement).toBeInTheDocument();
});

//nav item har correct link
it("species links to species", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Species");
  expect(linkElement.href).toBe("http://localhost/species");
});

it("species links to planets", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  const linkElement = getByText("Planets");
  expect(linkElement.href).toBe("http://localhost/planets");
});
