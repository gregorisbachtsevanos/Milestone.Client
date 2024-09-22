import styled from "styled-components";

export const StyledComingSoonContainer = styled.div`
  position: relative;
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 50;
  color: ${({ theme }) => theme.palette.yellow[500]};
  text-shadow: ${({ theme }) => theme.palette.yellow[500]} 1px 0 12px;
  cursor: no-drop;
`;
