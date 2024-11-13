import styled from "styled-components";

export const StyledCardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[900]};
  width: 100%;
  margin: auto;
  border-radius: 8px;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &.small {
    height: 50px;
  }

  &.no-margin {
    margin: unset;
  }
`;
