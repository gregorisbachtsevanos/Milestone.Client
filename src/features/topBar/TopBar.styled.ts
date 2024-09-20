import styled from "styled-components";

export const StyledTopBarContainer = styled.nav`
  height: 10%;
  width: 100%;
  top: 0;
  left: 0;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  /* background-color: ${({ theme }) => theme.palette.black[900]}; */
  padding: 50px;

  .buttons {
    display: flex;
    gap: 15px;

    button {
      width: 45px;
      height: 45px;
      border-radius: 500px;
      background-color: ${({ theme }) => theme.palette.black[500]};
      padding: 0;

      svg {
        width: 100%;
      }
    }
  }
`;
