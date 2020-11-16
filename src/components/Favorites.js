import React, { useContext } from "react";
import styled from "styled-components";

import { FavoritesContext } from "../utils/favoritesContext";
import PageTitle from "./PageTitle";

const FavsCard = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Favorites = (props) => {
  const { favs, dispatch } = useContext(FavoritesContext);

  //console.log("in favorites component" + favsContext.favs);

  return (
    <>
      <PageTitle pageTitle={"Your Favorites"} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
        data-testid="favContent"
      >
        {favs.length > 0 ? (
          favs.map((el) => (
            <FavsCard style={{ padding: "20px" }}>
              <h3
                style={{
                  color: "white",
                  fontWeight: "lighter",
                  marginBottom: "20px",
                }}
              >
                {el}
              </h3>
              <img
                style={{ width: "300px", display: "inline-block" }}
                src={`/img/${el.replace(/[\s']/g, "").toLowerCase()}.jpg`}
                alt={`${el}`}
              />
              <button
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  fontFamily: "courier",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "red",
                  border: "none",
                }}
                onClick={() => dispatch({ type: "DELETE_FAV", name: el })}
              >
                Remove
              </button>
            </FavsCard>
          ))
        ) : (
          <h3> You have no favorites yet.</h3>
        )}
      </div>
    </>
  );
};

export default Favorites;
