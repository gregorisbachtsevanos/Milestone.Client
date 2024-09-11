import styled from "styled-components";

export const StyledAuthLayout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.pagePadding};
  gap: 3rem;
  background: linear-gradient(
    30deg,
    ${({ theme }) => theme.palette.black[800]} -50%,
    ${({ theme }) => theme.palette.green[700]} 90%,
    ${({ theme }) => theme.palette.yellow[500]} 220%
  );

  .auth-container {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
`;
