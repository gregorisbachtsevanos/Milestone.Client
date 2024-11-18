import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0
  }

  100% {
    transform: translateY(0);
    opacity: 1
  }
`;

export const StyledModal = styled.div<{ width?: string }>`
  position: relative;
  background-color: ${({ theme }) => theme.palette.black[900]};
  overflow: auto;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  padding: 16px;
  max-width: 90%;
  width: ${({ width }) => width};
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: visible;
  text-align: center;
  animation: ${slideUp} 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: 0 5px 25px ${({ theme }) => theme.palette.black[800]};

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;

    button {
      flex: 1;
    }

    &:has(button:only-child) {
      justify-content: center;
    }
  }

  .close-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    top: -15px;
    right: -15px;
    background-color: ${({ theme }) => theme.palette.black[500]};
    border-radius: 50%;

    svg * {
    }
  }
`;

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #1515158d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
