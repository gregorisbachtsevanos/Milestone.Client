import { GlassEffect, StyledAuthFormContainer } from "@/assets/styles/mixins.styled";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  ${StyledAuthFormContainer}
  ${GlassEffect}
  position: relative;
  z-index: 9;
  gap: 0px;

  .row {
    display: flex;
    gap: 30px;
  }

  button {
    margin: 15px 7px;
  }
`;
