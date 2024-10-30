import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const black900 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[900];
const black500 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[500];
const gray500 = ({ theme }: { theme: DefaultTheme }) => theme.palette.gray[500];

export const StyledDateContainer = styled.div`
  .date-picker {
    background-color: ${({ theme }) => theme.palette.black[800]};
    border: none;
    border-radius: 4px;
    padding: 3px;
    color: ${gray500};
    outline: none;
    cursor: pointer;
  }

  .react-datepicker {
    font-family: inherit;
    background-color: ${black900};
    border-color: ${({ theme }) => theme.palette.black[700]};
    gap: 5px;
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      border: 10px solid transparent;
      z-index: 99;
      border-bottom-color: ${black900};
    }

    .react-datepicker__header {
      background-color: ${black900};
      border-color: ${black900};

      * {
        color: ${gray500};
      }
    }

    .react-datepicker__today-button {
      background-color: ${black900};
      border: none;
      /* border-radius: 4px; */
      color: ${gray500};
      outline: none;
      cursor: pointer;
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__time-container {
      width: auto !important;
    }

    .react-datepicker__time-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected {
      background-color: ${gray500};
      color: ${({ theme }) => theme.palette.white};

      &:hover {
        background-color: ${gray500};
      }
    }

    .react-datepicker__day--in-range {
      background-color: ${black500};
    }

    .react-datepicker__day--range-start,
    .react-datepicker__day--range-end,
    .react-datepicker__day--selecting-range-end,
    .react-datepicker__day--selected {
      background-color: ${gray500};
      color: ${black500};
      border-radius: 0.3rem;

      &:hover {
        background-color: ${gray500};
      }
    }

    .react-datepicker__day--in-selecting-range:not(
        .react-datepicker__day--in-range,
        .react-datepicker__day--range-end,
        .react-datepicker__day--selecting-range-end
      ) {
      background-color: ${black500};
    }

    .react-datepicker__day--in-range:not(
        .react-datepicker__day--in-selecting-range,
        .react-datepicker__day--range-end
      ) {
      background-color: ${black500};
    }

    .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--in-selecting-range) {
      background-color: ${gray500};
      outline: none;
    }

    .react-datepicker__day--in-range {
      color: ${black500};
    }
  }
`;
