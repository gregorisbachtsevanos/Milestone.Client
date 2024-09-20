import styled from "styled-components";

export const StyledComingSoonContainer = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  font-weight: 100;
  z-index: 5;
  color: ${({ theme }) => theme.palette.yellow[500]};
  text-shadow: ${({ theme }) => theme.palette.yellow[500]} 1px 0 12px;

  #shadow {
    perspective: 50px;
    perspective-origin: 50% 80%;
  }

  #shadow::after {
    content: "coming soon";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scaleY(0.5) rotateX(-15deg);
    transform-origin: 50% 100%;
    opacity: 0.2;
  }
`;
