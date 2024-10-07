import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
const black800 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[800];

export const StyledProfileController = styled.div`
  position: absolute;
  top: 10%;
  left: 78%;
  width: 400px;
  border-radius: 15px;

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 85%;
    border: 10px solid transparent;
    border-bottom-color: ${black800};
  }

  .mask {
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow: hidden;
    left: 0%;
    top: 0%;
    width: 400px;
    gap: 15px;
    padding: 25px 20px;
    border-radius: 15px;
    background-color: ${black800};
    box-shadow: 0 5px 20px ${({ theme }) => theme.palette.black[900]};
    z-index: 999;
  }
`;
