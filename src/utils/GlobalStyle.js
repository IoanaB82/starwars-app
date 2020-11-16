import { createGlobalStyle } from "styled-components";

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
        height: auto;
      
        font-size: 18px;
      }

      
`;

export default GlobalStyle;
