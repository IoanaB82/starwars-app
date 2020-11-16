import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  background-color: none;
  color: white;
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
`;

const ThemeSelector = (props) => {
  return (
    <Div>
      <label htmlFor="Theme">Choose your theme: </label>
      <select name="theme" onChange={props.onChange} value={props.value}>
        <option value="empire">The empire strikes back</option>
        <option value="revenge">Revenge of the sith</option>
        <option value="attack">Attack of the clones</option>
      </select>
    </Div>
  );
};

export default ThemeSelector;
