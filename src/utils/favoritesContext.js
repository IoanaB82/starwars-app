import React, { createContext, useReducer } from "react";

import favoritesReducer from "./favoritesReducer";

let key = "favs";

const initialFavsFunction = () => {
  if (typeof window !== "undefined") {
    const saved = window.sessionStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  }
  return [];
};

export const FavoritesContext = createContext();

export function FavoritesProvider(props) {
  let initialFavs = initialFavsFunction();
  const [favs, dispatch] = useReducer(favoritesReducer, initialFavs);

  return (
    <FavoritesContext.Provider value={{ favs, dispatch }}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
