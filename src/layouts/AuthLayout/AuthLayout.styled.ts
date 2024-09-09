import styled from "styled-components";

export const StyledAuthLayout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.pagePadding};
  gap: 3rem;
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.palette.black[800]} 0%,
    ${({ theme }) => theme.palette.green[700]} 90%
  );

  .auth-container {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .header {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .section {
        display: flex;
        flex-direction: column;
        gap: 2px;

        span {
          color: ${({ theme }) => theme.palette.gray[500]};
        }

        img {
          width: 150px;
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      gap: 12px;
      * {
        color: ${({ theme }) => theme.palette.gray[500]};
      }
    }
  }
`;
