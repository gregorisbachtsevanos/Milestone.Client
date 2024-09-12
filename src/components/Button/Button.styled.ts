import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>``;
export const StyledAnchor = styled.a<AnchorHTMLAttributes<HTMLAnchorElement>>``;
export const StyledLink = styled(Link)``;
