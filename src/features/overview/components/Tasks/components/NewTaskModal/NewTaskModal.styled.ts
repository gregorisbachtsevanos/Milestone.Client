import styled from "styled-components";

export const StyledNewTaskModalContainer = styled.form`
  padding: 11px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  text-align: left;

  .submit-btn {
    width: 100%;
    padding: 5px;

    button {
      width: 25%;
    }
  }
`;
