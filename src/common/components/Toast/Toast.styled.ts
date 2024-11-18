import { ToastContainer } from "react-toastify";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
 0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 18px 16px;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    z-index: 999999;
    min-height: auto;
    width: auto;
    font-family: inherit;

    /* .closeIcon * {
      fill: ${({ theme }) => theme.palette.black[500]};
    } */
    &.Toastify__toast--info {
      color: ${({ theme }) => theme.palette.black[900]};
    }

    &.Toastify__toast--success {
      background: linear-gradient(
        100deg,
        rgba(54, 153, 50, 0.2) 0%,
        rgba(26, 26, 26, 0.8) 51%,
        rgba(26, 26, 26, 1) 100%
      );
      color: ${({ theme }) => theme.palette.gray[500]};
    }

    &.Toastify__toast--warning {
      color: ${({ theme }) => theme.palette.black[900]};
    }

    &.Toastify__toast--error {
      background: linear-gradient(
        100deg,
        rgba(153, 50, 50, 0.2) 0%,
        rgba(26, 26, 26, 0.8) 51%,
        rgba(26, 26, 26, 1) 100%
      );
      color: ${({ theme }) => theme.palette.red[500]};
    }

    &.Toastify__toast--default {
      color: ${({ theme }) => theme.palette.black[900]};
      svg {
        animation: ${rotateAnimation} 1.5s linear infinite;
      }
      .Toastify__toast-icon {
        display: none;
      }
    }

    .Toastify__toast-body {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 0.5rem;
      padding: 0;

      .Toastify__toast-icon {
        display: none;
      }

      div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 12px;

        svg {
          color: rgb(143, 44, 44);
          /* background-color: #ff46460d; */
          border-radius: 4px;
          padding: 4px;
          min-width: fit-content;
        }
      }
    }

    .Toastify__close-button {
      svg {
        fill: ${({ theme }) => theme.palette.gray[500]};
      }
    }

    .Toastify__progress-bar--success {
      background: ${({ theme }) => theme.palette.green[50]};
    }
  }
`;
