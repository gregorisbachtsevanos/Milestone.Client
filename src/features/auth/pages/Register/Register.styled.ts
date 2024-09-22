import { GlassEffect, StyledAuthFormContainer } from "@/assets/styles/mixins.styled";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  ${StyledAuthFormContainer}
  ${GlassEffect}

  .row {
    display: flex;
    gap: 30px;
  }
`;
