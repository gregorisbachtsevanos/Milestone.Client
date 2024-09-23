import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 10px 45px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 5px;

  &.fullWidth {
    width: 100%;
  }

  &.small {
  }

  &.medium {
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

  &.fullWidth {
    width: 100%;
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
