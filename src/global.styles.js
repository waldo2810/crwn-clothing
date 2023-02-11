import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    width: 90%;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    padding-bottom: 2rem
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
  text-decoration: underline;
  }

  * {
    box-sizing: border-box;
    font-family: 'Sofia Sans Condensed', sans-serif;
  }
`;
