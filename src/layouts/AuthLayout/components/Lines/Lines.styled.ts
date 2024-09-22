import { getRandomValues } from "@/utils/helpers";
import styled from "styled-components";

interface LineContainerProps {
  topLines?: number[];
  leftLines?: number[];
}

const topLines = getRandomValues(5, -30, 40);
const leftLines = getRandomValues(6, 50, 80);

export const StyledLineContainer = styled.div<LineContainerProps>`
  opacity: 0.4;
  * {
    position: absolute;
    width: 53%;
    height: 1px;
    background: ${({ theme }) => theme.palette.yellow[500]};
    background-size: 20px 20px;
    transform: rotate(-50deg);
  }

  // Positions for lines based on topLines
  ${({}) =>
    topLines
      .map(
        (top, i) => `
    .line-${i + 1} {
      top: ${top}%;
      left: 45%;
    }
  `
      )
      .join("")}

  // Center line
  .center {
    top: 43%;
    left: 45%;
  }

  // Positions for lines based on leftLines
  ${({}) =>
    leftLines
      .map(
        (left, i) => `
    .line-${i + 6} {
      top: 43%;
      left: ${left}%;
    }
  `
      )
      .join("")}
`;
