import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: ${(props) => props.theme.colors.secondary};
  }

  body {
    margin: 0 auto;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text};
    font-family: Arial, Helvetica, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`;
