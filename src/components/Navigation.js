import React from "react";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  text-decoration: none;
  color: #fff;
  display: flex;

  li {
    padding: 20px;

    & a,
    a:visited {
      text-decoration: none;
      color: #fff;
    }

    & a:active,
    a:focus {
      color: var(--color-light-brown);
    }

    & a:hover {
      color: #000;
    }
  }
`;

const Navigation = () => {
  return (
    <NavMenu>
      <Ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/species">Species</NavLink>
        </li>
        <li>
          <NavLink to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </Ul>
    </NavMenu>
  );
};

export default Navigation;
