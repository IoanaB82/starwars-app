import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
//import { useStore } from './ThemeStore';
//import { empireTheme } from './Themes';
import { ThemeContext } from './ThemeStore';



const themes = {
    empire: {
        background: '#3D3336',
        headerBackground: '#698FBA',
        cardHeader: '#F1F3F2',
        cardBackground: '#AB856E'
    },

    revenge: {
        background: '#484445',
        headerBackground: '#B64419',
        cardHeader: '#595959',
        cardBackground: '#B9A79B'
    },

    attack: {
        background: '#484445',
        headerBackground: '#B64419',
        cardHeader: '#595959',
        cardBackground: '#B9A79B' 
    }
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-dark-brown: #3d3336;
        --color-dark-blue: #4c596f;
        --color-light-brown: #ab856e;
        --color-light-blue-1: #6a8eb9;
        --color-light-blue-2: #bcc8dd;
      
        @import url(//db.onlinewebfonts.com/c/c00548f5d217ed324ae9096051927001?family=STARWARS);
      }

      body {
        
        box-sizing: content-box;
        margin: 0 auto;
        text-align: center;
        background-color: black;
        font-family: "STARWARS";
        height: 100vh;
      
        font-size: 18px;
      }
`;


const Theme = ( { children } ) => {

  //  const { theme } = useStore();

    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}

        </ThemeProvider>
    );
}

export default Theme;