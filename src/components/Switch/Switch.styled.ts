import styled from "styled-components";

export const StyledSwitchContainer = styled.div<{
  onColor?: string;
  offColor?: string;
}>`
  width: 35px;
  height: 23px;
  position: relative;
  display: flex;
  align-items: center;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + label {
      &:before {
        background: ${({ theme, onColor }) => onColor || theme.palette.yellow[500]};
        margin-left: 13px;
        transition: all 0.2s ease;
      }
    }
  }

  label {
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 13px;
    background: ${({ theme }) => theme.palette.black[500]};
    height: 11px;
    width: 23px;

    &:before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      background: ${({ theme, offColor }) => offColor || theme.palette.red[500]};
      border-radius: 50%;
      margin-left: 2px;
      transition: all 0.2s ease;
    }

    &:before {
      position: absolute;
      left: -3px;
    }
  }

  input:disabled + label {
    opacity: 0.5;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.palette.black[900]};
    &::before {
      background: ${({ theme }) => theme.palette.black[500]} !important;
    }
  }
`;
