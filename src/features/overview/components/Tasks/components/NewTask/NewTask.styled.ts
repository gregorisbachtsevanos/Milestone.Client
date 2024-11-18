import styled from "styled-components";

export const StyledNewTaskContainer = styled.form`
  padding: 11px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  text-align: left;

  .selection {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      margin-top: 20px;
      color: ${({ theme }) => theme.palette.red[500]};
    }
  }

  .datepicker {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      margin-left: 6px;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 5px;

    button {
      width: 25%;
    }
  }
`;
