import { Title } from "@/theme";
import styled from "styled-components";

// Container for the bottom navigation bar
export const StyledBottomContainer = styled.ul`
  display: flex;
  align-items: center;
  position: fixed;
  top: 88vh;
  left: 50%;
  transform: translateX(-50%);
  gap: 5px;
  background-color: ${({ theme }) => theme.palette.black[800]};
  padding: 15px;
  border-radius: 50px;
`;

// Styling for individual list items (tabs)
export const StyledListItem = styled.li<{ isActive: boolean }>`
  color: ${({ theme }) => theme.palette.black[500]};
  padding: 5px 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-radius: 20px;
    background-color: ${theme.palette.yellow[500]};
  `}
`;

export const StyledTitle = styled(Title)`
  padding: 5px 10px;
  transition: color 1s ease-in-out; /* Add color transition if you want */
`;
