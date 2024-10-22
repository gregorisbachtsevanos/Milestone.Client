import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 10px 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 5px;
  text-align: center;

  &.big {
    width: 100%;
  }

  &.medium {
    width: 50%;
  }

  &.small {
    padding: 0;
    height: 35px;
  }

  &.rounded {
    border-radius: 50px;
  }

  &.danger-outline {
    border: 1px solid ${({ theme }) => theme.palette.red[500]};
    color: ${({ theme }) => theme.palette.red[500]};
  }

  &.danger {
    background-color: ${({ theme }) => theme.palette.red[500]};
    color: ${({ theme }) => theme.palette.white[900]};
  }

  &.ghost {
    background-color: ${({ theme }) => theme.palette.green[700]};
    color: ${({ theme }) => theme.palette.white[900]};
  }

  &.link {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.yellow[500]};
    padding: 0;
    border: none;
  }

  &.primary {
    background-color: ${({ theme }) => theme.palette.yellow[500]};
    color: ${({ theme }) => theme.palette.black[900]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.disabled {
    background-color: ${({ theme }) => theme.palette.white[50]};
    color: ${({ theme }) => theme.palette.black[900]};
    cursor: no-drop;
  }
`;

export const StyledAnchor = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>``;

export const StyledLink = styled(Link)``;
