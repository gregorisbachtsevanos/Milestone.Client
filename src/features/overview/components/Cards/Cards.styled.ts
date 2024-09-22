import { Scrollbar } from "@/assets/styles/mixins.styled";
import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const black700 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[700];

export const StyledCardsContainer = styled.div`
  background-color: ${black700};
  border: 2px solid ${black700};
  padding: 0 20px;
  gap: 20px;
  width: auto;
  border-radius: 15px;
  max-height: 700px;
  overflow-y: scroll;
  z-index: 5;

  ${Scrollbar}

  .cards-container {
    padding-top: 5rem;
    padding-bottom: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 400px 400px;
  }
`;
