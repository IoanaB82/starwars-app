import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Category from "./components/Category";
import Favorites from "./components/Favorites";
import ThemeSelector from "./components/ThemeSelector";

import { FavoritesProvider } from "./utils/favoritesContext";

import GlobalStyle from "./utils/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { themes } from "./utils/Themes";

const Main = styled.main`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;

  grid-template-rows: 1fr auto;
  //flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${(props) => props.theme.background};

  position: relative;
`;

function App(props) {
  const [value, setValue] = useState("empire");
  // let { path } = useRouteMatch();

  // useEffect(() => {
  //   console.log(path);
  // }, [path]);

  return (
    <>
      <FavoritesProvider>
        <ThemeProvider theme={themes[value]}>
          <GlobalStyle />
          <Header />

          <ThemeSelector
            onChange={(e) => {
              setValue(e.currentTarget.value);

              console.log(e.currentTarget.value);
            }}
            value={value}
          />
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/:category" exact component={Category} />
              <Route path="/:category/:id" component={Detail} />
            </Switch>
          </Main>
        </ThemeProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
