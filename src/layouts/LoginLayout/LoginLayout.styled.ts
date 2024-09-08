import styled from "styled-components";

export const StyledLoginLayout = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    img {
      width: 100px;
      border-radius: 0.5rem;
    }

    .title {
      text-align: center;
      img {
        width: auto;
        height: 35px;
      }
      :last-child {
        color: ${({ theme }) => theme.palette.navy[900]};
      }
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;
