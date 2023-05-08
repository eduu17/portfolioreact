import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: 0;
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
  }
  img{
    max-width: 100%;
  }
  html, body{
    height: 100%;
  }
`;
