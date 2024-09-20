import { Title } from "@/theme";
import styled from "styled-components";

// Container for the bottom navigation bar
export const StyledBottomContainer = styled.ul`
  display: flex;
  align-items: center;
  position: fixed;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  gap: 5px;
  background-color: ${({ theme }) => theme.palette.black[800]};
  padding: 8px;
  border-radius: 50px;
  z-index: 15;
`;

// Styling for individual list items (tabs)
export const StyledListItem = styled.li<{ isActive: boolean }>`
  color: ${({ theme }) => theme.palette.black[500]};
  padding: 5px 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${({ isActive, theme }) =>
    isActive &&
    `
    border-radius: 20px;
    background-color: ${theme.palette.yellow[500]};
  `}
`;

export const StyledTitle = styled(Title)`
  padding: 5px 10px;
`;
