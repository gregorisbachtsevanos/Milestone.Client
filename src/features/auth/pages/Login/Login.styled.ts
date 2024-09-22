import { GlassEffect, StyledAuthFormContainer } from "@/assets/styles/mixins.styled";
import styled from "styled-components";

export const StyledLoginForm = styled.form`
  ${StyledAuthFormContainer}
  ${GlassEffect}

  .title-container {
    padding: 24px 0;
  }

  .caption {
    text-align: center;
    margin-bottom: 1rem;
  }

  .button {
    margin-top: 1rem;
    padding: 0 7px;
  }

  a {
    text-align: right;
  }
`;
