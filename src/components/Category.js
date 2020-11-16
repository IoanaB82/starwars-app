import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../utils/favoritesContext";
import styled from "styled-components";

import Loader from "../utils/Loader";
import Page404 from "./Page404";
import { Link, useLocation, useParams } from "react-router-dom";
import PageTitle from "./PageTitle";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CategoryCard = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.theme.cardBackground};
  color: black;

  margin: 20px;
  justify-self: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  align-content: center;
  justify-items: center;

  .card-title {
    width: auto;
    padding: 20px;
    height: auto;
    color: white;
    font-size: 30px;
    background-color: ${(props) => props.theme.headerBackground};
    text-align: center;
    text-transform: uppercase;
    justify-self: stretch;
    position: relative;
  }

  .card-info {
    width: auto;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    padding: 20px;
    text-align: left;
  }

  .card-button {
    width: fit-content;
    height: auto;
    font-family: "Courier New", Courier, monospace;
    padding: 20px 30px;
    border: none;
    background-color: var(--color-dark-blue);
    color: white;
    border-radius: 15px;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 30px;
    backface-visibility: hidden;
    transform: scale(0.9);
    transition: all 0.1s ease;

    align-self: end;
    &:focus,
    &:visited {
      color: white;
    }
    &:hover {
      color: red;
      transform: scale(1.1);
    }
  }
  .fav-icon {
    position: absolute;
    padding-right: 10px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;

    & img {
      width: 48px;
      height: auto;
    }
  }
`;

const Category = (props) => {
  const location = useLocation();
  const { category } = useParams();
  const [elements, setElements] = useState();
  const [loading, setLoading] = useState(true);

  const favsContext = useContext(FavoritesContext);

  console.log("category:" + category);

  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      const cacheVersion = 1;
      const cacheName = `starwars-${cacheVersion}`;
      const url = `https://swapi.dev/api${location.pathname}`;
      let cachedData = await getCachedData(cacheName, url);

      if (cachedData) {
        console.log("retrieved cahced data");
        return cachedData;
      }

      async function getCachedData(cacheName, url) {
        const cacheStorage = await caches.open(cacheName);
        const cachedResponse = await cacheStorage.match(url);

        if (!cachedResponse || !cachedResponse.ok) {
          return false;
        }

        return await cachedResponse.json();
      }

      try {
        setLoading(true);
        const response = await fetch(
          `https://swapi.dev/api${location.pathname}`,
          { signal: controller.signal }
        );
        const data = await response.json();

        setElements(data.results);

        setLoading(false);
      } catch (error) {
        throw error;
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [location.pathname]);

  let key = "favs";

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(favsContext.favs));
    console.log(favsContext.favs);
  }, [favsContext.favs, key]);

  //if (error) throw error;
  if (loading) return <Loader />;
  if (elements.length === 0) return <Page404 />;

  let word = location.pathname.substring(1);
  const pageTitle = word.charAt(0).toUpperCase() + word.substr(1);

  return (
    <>
      <PageTitle pageTitle={pageTitle} />
      <Container>
        {elements.map((el, idx) => {
          return (
            <CategoryCard className="card" key={el.name}>
              <div className="card-title">
                {el.name}
                <span
                  className="fav-icon"
                  onClick={() =>
                    favsContext.dispatch({ type: "ADD_FAV", name: el.name })
                  }
                >
                  {favsContext.favs.includes(el.name) ? (
                    <img src="/img/favorite_red.png" alt="favorite icon"></img>
                  ) : (
                    <img src="/img/favorite.png" alt="favorite icon"></img>
                  )}
                </span>
              </div>

              {category === "species" ? (
                <div className="card-info">
                  Classification: {el.classification}
                </div>
              ) : (
                <div className="card-info">
                  Population: {el.population}
                  <br />
                  Terrain: {el.terrain}
                </div>
              )}

              <Link
                className="card-button"
                to={`${location.pathname}/${idx + 1}`}
              >
                learn more
              </Link>
            </CategoryCard>
          );
        })}
      </Container>
    </>
  );
};

export default Category;
