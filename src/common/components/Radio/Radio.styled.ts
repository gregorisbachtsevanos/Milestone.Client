import styled from "styled-components";

export const StyledRadioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 100%;
    position: relative;
    width: 15px;
    height: 15px;
    min-height: 15px;
    min-width: 15px;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.gray[500]};

    &:checked {
      background-color: ${({ theme }) => theme.palette.yellow[500]};

      &:disabled {
        background-color: blue;
      }

      &:after {
        content: "";
        position: absolute;
        width: 7.5px;
        height: 7.5px;
        min-height: 7.5px;
        min-width: 7.5px;
        max-height: 7.5px;
        max-width: 7.5px;
        top: 50%;
        left: 50%;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.palette.black[800]};
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  label {
    cursor: pointer;
  }

  &:has(input:disabled) label {
    cursor: not-allowed;
    color: pink;
  }
`;
