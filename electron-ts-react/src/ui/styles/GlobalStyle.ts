import { createGlobalStyle } from 'styled-components';
import codiicon from '@assets/font/codicon.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "codicon";
    src: url(${codiicon}) format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    color: ${(props) => props.theme.palette.primary.white};
    background-color: ${(props) => props.theme.palette.primary.bgColor};
    overflow-y: hidden;
  }

  a {
    text-decoration: none;
  }

  body, input, select, textarea, button {
    font-family: monospace;
  }
`;
