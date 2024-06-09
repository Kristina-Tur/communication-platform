import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin:0;
        padding: 0;
        box-sizing: border-box;
      /* background-color: #f3ebe4; */
    }

    *:focus-visible{

    }

    body {
  margin: 0;
  font-family: 'Roboto', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      min-width: 360px;
  
}

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

/*.App-wrapper {
  width: 1170px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-template-areas: "h h" "n c";

}

.header {
  grid-area: h;
  background-color: #d0e1de;

}


.nav {
grid-area: n;
background-color: #fbf7f2;

}

.content {
  grid-area: c;
  background-color: #f8f7f3;
}*/
`