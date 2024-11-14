import styled from "styled-components";

export const StyledSingleNoteContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[900]};
  border-radius: 8px;
  padding: 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &.highlighted {
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 10px;
      background-color: ${({ theme }) => theme.palette.green[700]};
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    :first-child {
      flex: 1;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;
