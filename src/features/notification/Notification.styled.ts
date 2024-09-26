import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const black800 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[800];

export const StyledNotificationContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 10%;
  left: 78%;
  width: 400px;
  height: auto;
  background-color: ${black800};
  border-radius: 8px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.palette.black[900]};

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 70%;
    border: 10px solid transparent;
    border-bottom-color: ${black800};
  }
`;
