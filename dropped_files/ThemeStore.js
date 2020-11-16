import React, { useState, useReducer, useContext, createContext } from 'react';
import {createGlobalStyle } from 'styled-components';
import { attack, empire, revenge } from './Themes';

/*export const themes = {
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
};*/

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

const ThemeContext = createContext(
 {  theme: empire,
    setTheme: () => {}}
   // switchTheme: () =>{ }
);

//const initialState = {theme: empireTheme};

/*const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_STATE': return {
            ...state,
            theme: action.payload.theme,
            switchTheme: theme => setTheme(theme)
        }
              
        default: return state;
                    break;
            }
        }

        case 'revenge': return {
            theme: revengeTheme
        }
      
        case 'empire': return {
            theme: empireTheme
        }
        
        default: throw new Error(`unhandled action type: ${action.type}`);
    }
}*/

const ThemeStore = ({ children }) =>{

   // const [state, dispatch] = useReducer(reducer, initialState);

   const {theme, setTheme} = useContext(ThemeStore);

   const switchTheme = theme => {
            setTheme(theme);
   }

    //const value = { theme, setTheme };
 // const switchTheme = (theme) => setTheme(theme);

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
           <GlobalStyle />
            {children}

        </ThemeContext.Provider>

    );

}

export { ThemeStore, ThemeContext };
//export const useStore = () => useContext(ThemeContext);