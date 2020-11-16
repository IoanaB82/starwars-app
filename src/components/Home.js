import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas";

const H3 = styled.h3`
  color: #fff;
  font-size: 50px;
  text-transform: uppercase;
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Home = () => {
  return (
    <>
      <H3>A home for you find we must</H3>
      <Canvas width={window.innerWidth} height={window.innerHeight} />
    </>
  );
};

export default Home;
