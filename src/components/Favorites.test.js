import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import Favorites from "./Favorites";
import { FavoritesProvider } from "../utils/favoritesContext";

afterEach(cleanup);

function renderFavorites(args) {
  let defaultProps = {
    favs: [],
    location: "",
    errors: {},
  };

  const props = { ...defaultProps, ...args };

  return render(
    <MemoryRouter>
      <FavoritesProvider value={props.favs}>
        <Favorites {...props} />
      </FavoritesProvider>
    </MemoryRouter>
  );
}

//test that component renders
it("renders without crashing", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <FavoritesProvider value={[]}>
        <Favorites />
      </FavoritesProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

//test that page title is shown correctly
it("should render a pagetitle component with content Favorites", () => {
  const { getByTestId } = renderFavorites();

  expect(getByTestId("pageTitle")).toHaveTextContent("Favorites");
});

//test what shows when favs array is empty, no favorites are chosen

it("expects to find You have no favorites when empty array", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <FavoritesProvider value={[]}>
        <Favorites />
      </FavoritesProvider>
    </MemoryRouter>
  );
  expect(getByTestId("favContent")).toHaveTextContent(
    "You have no favorites yet."
  );
});

//test that an element with name from favs array is shown

// it("expects to find a favorites card with title as array element", () => {
//   const favs = ["Hutt", "Droid"];
//   const { getByTestId } = render(
//     <MemoryRouter>
//       <FavoritesProvider value={favs}>
//         <Favorites />
//       </FavoritesProvider>
//     </MemoryRouter>
//   );
//   expect(getByTestId("favContent")).toHaveTextContent("Hutt");
// });
