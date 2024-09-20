import styled from "styled-components";

export const StyledSingleNoteContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[900]};
  border-radius: 8px;
  padding: 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

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
