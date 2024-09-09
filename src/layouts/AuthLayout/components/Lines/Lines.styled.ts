import styled from "styled-components";
interface LineContainerProps {
  linesTop: number[];
  linesLeft: number[];
}

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

  // Positions for the first 5 lines
  ${({ linesTop }) =>
    linesTop
      .slice(0, 5)
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

  // Remaining lines (line 6 to 11)
  ${({ linesLeft }) =>
    linesLeft
      .slice(0, 6)
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
