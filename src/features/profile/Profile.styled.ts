import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
const black800 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[800];

export const StyledProfileController = styled.div`
  z-index: 999;
  padding: 25px 0px;
  position: absolute;
  top: 10%;
  left: 78%;
  width: 400px;
  height: 600px;
  background-color: ${black800};
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.palette.black[900]};

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 85%;
    border: 10px solid transparent;
    border-bottom-color: ${black800};
  }
`;
