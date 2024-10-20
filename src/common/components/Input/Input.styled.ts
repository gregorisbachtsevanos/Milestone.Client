import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const green700 = ({ theme }: { theme: DefaultTheme }) => theme.palette.green[700];
const black900 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[900];

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
    background-color: ${green700};
    border-radius: 5px;

    &.dark {
      background-color: ${black900};

      input {
        background-color: ${black900};
        &:-webkit-autofill,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:active {
          -webkit-background-clip: text;
          -webkit-text-fill-color: ${({ theme }) => theme.palette.white[900]};
          box-shadow: inset 0 0 20px 20px ${black900};
        }
      }
    }

    input {
      width: 100%;
      padding: 10px;
      background-color: ${green700};
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
        box-shadow: inset 0 0 20px 20px ${green700};
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
