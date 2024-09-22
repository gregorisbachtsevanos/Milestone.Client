import { Scrollbar } from "@/assets/styles/mixins.styled";
import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const black700 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[700];

export const StyledChatContainer = styled.div`
  background-color: ${black700};
  border: 2px solid ${black700};
  padding: 20px 20px;
  gap: 20px;
  border-radius: 15px;
  max-height: 700px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
  width: 100%;
  height: 35vh;
  ${Scrollbar}

  .form {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }
`;
