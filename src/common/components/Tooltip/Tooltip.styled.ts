import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  .tooltip {
    display: block;
    position: absolute;
    width: auto;
    padding: 12px;
    z-index: 9999;
    background-color: ${({ theme }) => theme.palette.black[500]};
    box-shadow: 0px 0px 16px 0px #00000026;
    color: ${({ theme }) => theme.palette.white};
    border-radius: 5px;
    transition: all 0.2s;
    width: max-content;
    user-select: none;
    pointer-events: none;
    max-width: 440px;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
    }
  }

  &.top {
    .tooltip {
      left: 50%;
      transform: translateX(-50%) scale(0%);
      bottom: calc(100% + 12px);
      transform-origin: bottom;

      &::after {
        border-top: 8px solid ${({ theme }) => theme.palette.black[500]};
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
      }
    }
    &:hover {
      .tooltip {
        transform: translateX(-50%) scale(100%);
      }
    }
  }

  &.bottom {
    .tooltip {
      left: 50%;
      transform: translateX(-50%) scale(0%);
      transform-origin: top;
      top: calc(100% + 12px);

      &::after {
        border-bottom: 8px solid ${({ theme }) => theme.palette.black[500]};
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        left: 50%;
        transform: translateX(-50%);
        top: -8px;
      }
    }
    &:hover {
      .tooltip {
        transform: translateX(-50%) scale(100%);
      }
    }
  }

  &.left {
    .tooltip {
      top: 50%;
      transform: translateY(-50%) scale(0%);
      transform-origin: right;
      right: calc(100% + 12px);
      &::after {
        border-bottom: 8px solid transparent;
        border-left: 8px solid ${({ theme }) => theme.palette.black[500]};
        border-top: 8px solid transparent;
        right: -8px;
        transform: translateY(-50%);
        top: 50%;
      }
    }
    &:hover {
      .tooltip {
        transform: translateY(-50%) scale(100%);
      }
    }
  }

  &.right {
    .tooltip {
      top: 50%;
      transform: translateY(-50%) scale(0%);
      transform-origin: left;
      left: calc(100% + 12px);
      &::after {
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid ${({ theme }) => theme.palette.black[500]};
        left: -8px;
        transform: translateY(-50%);
        top: 50%;
      }
    }
    &:hover {
      .tooltip {
        transform: translateY(-50%) scale(100%);
      }
    }
  }
`;
