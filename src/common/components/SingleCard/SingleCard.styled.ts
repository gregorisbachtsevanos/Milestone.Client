import styled from "styled-components";

export const StyledSingleCardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[900]};
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;
