import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  padding: 5px;

  .input {
    display: flex;
    align-items: center;
    padding-left: 5px;
    background-color: ${({ theme }) => theme.palette.green[700]};
    border-radius: 5px;

    input {
      width: 100%;
      padding: 10px;
      background-color: ${({ theme }) => theme.palette.green[700]};
      border: none;
      border-radius: 5px;
      color: ${({ theme }) => theme.palette.white[900]};
      outline: none;
      &:-webkit-autofill,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        -webkit-text-fill-color: ${({ theme }) => theme.palette.white[900]};
        box-shadow: inset 0 0 20px 20px ${({ theme }) => theme.palette.green[700]};
      }
    }

    .button {
      z-index: 10;
      width: 75px;
      color: ${({ theme }) => theme.palette.yellow[500]};
      cursor: pointer;
    }
  }

  .error {
    color: ${({ theme }) => theme.palette.red[500]};
  }
`;
