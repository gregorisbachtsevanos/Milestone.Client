import styled from "styled-components";

export const StyledRoundedLinesContainer = styled.div`
  .line-1 {
    border: 2px solid ${({ theme }) => theme.palette.green[700]};
    border-radius: 820px / 2;
    bottom: 30vh;
    height: 700px;
    opacity: 0.8;
    position: fixed;
    left: 0vw;
    width: 820px;
    z-index: 1;
    transform: rotate(145deg);
  }

  .line-2 {
    border: 2px solid ${({ theme }) => theme.palette.green[700]};
    border-radius: 820px / 2;
    height: 820px;
    left: 40vw;
    position: fixed;
    opacity: 0.8;
    top: 15vh;
    width: 820px;
    z-index: 1;
    transform: rotate(70deg);
  }
  .line-3 {
    border: 2px solid ${({ theme }) => theme.palette.green[700]};
    border-radius: 820px / 2;
    height: 540px;
    left: 65vw;
    position: fixed;
    opacity: 0.8;
    top: 70vh;
    width: 820px;
    z-index: 1;
    transform: rotate(45deg);
  }
`;
