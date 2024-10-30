import styled from "styled-components";

export const StyledNewEventModalContainer = styled.div`
  text-align: left;
  gap: 10px;
  display: flex;
  flex-direction: column;

  label {
    margin-left: 5px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .datepicker {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 5px;
  }

  .submit-btn {
    width: 100%;
    padding: 5px;

    button {
      width: 25%;
    }
  }
`;
