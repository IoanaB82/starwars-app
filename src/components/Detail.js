import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../utils/favoritesContext";
import Page404 from "./Page404";
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Loader from "../utils/Loader";
import styled from "styled-components";

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;

  align-items: center;
  height: 100vh;
`;

const DetailImg = styled.img`
  max-width: 600px;
  height: auto;
  display: block;
  margin-top: 40px;
`;

const H3 = styled.h3`
  color: #fff;
  font-size: 50px;
  text-transform: uppercase;
  display: block;
  z-index: 1;
`;

const Figcaption = styled.figcaption`
  text-align: left;
  line-height: 1.2;
`;

const Detail = (props) => {
  const { id } = useParams();

  let { url } = useRouteMatch();
  let location = useLocation();
  // console.log(props.location);
  // console.log(props.match);
  // console.log(props.history);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const favsContext = useContext(FavoritesContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api${location.pathname}`);
      const data = await response.json();
      setItem(data);
      console.log(data, `https://swapi.dev/api${location.pathname}`);
      setLoading(false);
    };

    // console.log(url);
    // console.log(favsContext.favs);
    fetchData();

    return () => {};
  }, [url, location.pathname, id]);
  if (loading) return <Loader />;
  if (item.length === 0) return <Page404 />;

  let modifiedName = item.name.replace(/[\s']/g, "").toLowerCase();

  return (
    <DetailPage>
      <>
        <>
          <H3 style={{ color: "white" }}>{item.name}</H3>
          <span
            className="fav-icon"
            onClick={() =>
              favsContext.dispatch({ type: "ADD_FAV", name: item.name })
            }
          >
            {favsContext.favs.includes(item.name) ? (
              <img
                style={{ width: "48px" }}
                src="/img/favorite_red.png"
                alt="favorite icon"
              ></img>
            ) : (
              <img
                style={{ width: "48px" }}
                src="/img/favorite.png"
                alt="favorite icon"
              ></img>
            )}
          </span>
        </>
        <div style={{ margin: "20px 0" }}>
          <button onClick={() => history.goBack()}>Back</button>
        </div>

        <figure>
          {location.pathname.includes("planets") ? (
            <Figcaption style={{ color: "white" }}>
              Population: {item.populaion} <br />
              Terrain: {item.terrain}
              <br />
              Climate: {item.climate}
            </Figcaption>
          ) : (
            <Figcaption style={{ color: "white" }}>
              Classification: {item.classification} <br />
              Designation: {item.designation}
              <br />
              Language: {item.language}
            </Figcaption>
          )}

          <DetailImg src={`/img/${modifiedName}.jpg`} alt={`${item.name}`} />
        </figure>
      </>
    </DetailPage>
  );
};

export default Detail;
