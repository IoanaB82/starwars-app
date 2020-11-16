import React from "react";
import styled from "styled-components";
import Loader from "../utils/Loader";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Page404 from "./Page404";

const PlanetsCard = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${(props) => props.theme.cardBackground};
  color: black;

  margin: 20px;

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

    align-self: end;
    &:focus,
    &:visited {
      color: white;
    }
    &:hover {
      color: red;
    }
  }
`;

const Planets = (props) => {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  const location = useLocation();

  const [planets, setPlanets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api${location.pathname}`);
      const data = await response.json();
      setPlanets(data.results);
      setLoading(false);
    };

    fetchData();

    return () => {};
  }, [location.pathname]);
  if (loading) return <Loader />;
  if (planets.length === 0) return <Page404 />;

  return (
    <>
      {planets.map((pl, idx) => {
        return (
          <PlanetsCard className="card" key={idx}>
            <div className="card-title">{pl.name}</div>
            <div className="card-info">
              Population: {pl.population}
              <br />
              Terrain: {pl.terrain}
            </div>
            <Link
              className="card-button"
              to={`${location.pathname}/${idx + 1}`}
            >
              learn more
            </Link>
          </PlanetsCard>
        );
      })}
    </>
  );
};

export default Planets;
