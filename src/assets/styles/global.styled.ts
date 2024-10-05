import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts.styled";

export const GlobalStyles = createGlobalStyle`
  ${fonts
    .map(
      ({ weight, style, src }) => `
    @font-face {
      font-family: 'Spectral';
      font-weight: ${weight};
      font-style: ${style};
      font-display: swap;
      src: url(${src}) format('truetype');
    }
  `
    )
    .join("")}

  /* General Global Styles */
  html {
    overflow: hidden;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family:  sans-serif;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    color: ${({ theme }) => theme.palette.white[900]};
    scrollbar-color: transparent ${({ theme }) => theme.palette.black[900]};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    font-family: sans-serif;
    color: orange;
    background-color: transparent;
    cursor: pointer;
  }

  .transition-effect {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  /* Scrollbar Styling */
  @media (min-width: 500px) {
    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    *::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.palette.white[900]};
      border-radius: 5px;
    }

    *::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 5px;
      border: 0px none ${({ theme }) => theme.palette.white[900]};
    }
  }
`;

export default GlobalStyles;
