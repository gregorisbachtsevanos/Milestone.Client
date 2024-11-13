import styled, { keyframes } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const yellow500 = ({ theme }: { theme: DefaultTheme }) => theme.palette.yellow[500];
const grey500 = ({ theme }: { theme: DefaultTheme }) => theme.palette.gray[500];

const rotation = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotationBack = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const StyledLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* transform: translate(-50%, -20%); */
  background-color: black;

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: ${grey500} ${grey500} transparent transparent;
    box-sizing: border-box;
    animation: ${rotation} 2s linear infinite;

    &::after,
    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent ${yellow500} ${yellow500};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-sizing: border-box;
      animation: ${rotationBack} 1s linear infinite;
      transform-origin: center center;
    }

    &::before {
      width: 32px;
      height: 32px;
      border-color: ${grey500} ${grey500} transparent transparent;
      animation: rotation 1.5s linear infinite;
    }
  }
`;
