import styled from "styled-components";

export const StyledComingSoonContainer = styled.div`
  position: relative;
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 50;
  color: ${({ theme }) => theme.palette.yellow[500]};
  text-shadow: ${({ theme }) => theme.palette.yellow[500]} 1px 0 12px;
  cursor: no-drop;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    box-shadow: 0 0 100px 400px rgba(0, 0, 0, 0.1) inset;
    transition: box-shadow 0.3s ease;
  }
`;
