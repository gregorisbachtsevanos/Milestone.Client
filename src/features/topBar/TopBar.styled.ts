import styled, { DefaultTheme } from "styled-components";

const black600 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[600];
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

      &:hover {
        box-shadow: 0 0 20px 1px ${black600};
      }

      &.active {
        box-shadow: 0 0 20px 1px ${black600};
      }

      svg {
        width: 100%;
      }
    }
  }
`;
