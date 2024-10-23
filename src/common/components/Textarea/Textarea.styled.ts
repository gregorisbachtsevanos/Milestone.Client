import styled from "styled-components";
import { StyledInputContainer } from "../Input/Input.styled";

export const StyledTextareaContainer = styled(StyledInputContainer)`
  display: flex;
  flex-direction: column;

  .textarea {
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;

    &.dark {
      background-color: ${({ theme }) => theme.palette.black[900]};
      color: white;
    }

    &.gray {
      background-color: ${({ theme }) => theme.palette.black[800]};
      color: black;
    }

    textarea {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      color: ${({ theme }) => theme.palette.gray[500]};
      resize: none;
    }

    .button {
      margin-left: auto;
      cursor: pointer;
      color: blue;
    }
  }

  .error {
    color: red;
    margin-top: 4px;
  }
`;
