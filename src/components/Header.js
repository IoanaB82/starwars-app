import React from "react";

import Navigation from "./Navigation";

import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.headerBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  box-sizing: content-box;
`;

const H2 = styled.h2`
  font-size: 24px;
  padding: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <H2 data-testid="headerh2">Starwars app</H2>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;
