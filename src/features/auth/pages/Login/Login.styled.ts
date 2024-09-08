import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .title-container {
    padding: 24px 0;
  }

  .caption {
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2rem;
  }
  a {
    text-align: right;
  }
`;
