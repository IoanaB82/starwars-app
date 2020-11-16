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

const Page404 = (props) => {
  return (
    <>
      <H3>Something went wrong.</H3>

      <Canvas width={window.innerWidth} height={window.innerHeight} />
    </>
  );
};

export default Page404;
