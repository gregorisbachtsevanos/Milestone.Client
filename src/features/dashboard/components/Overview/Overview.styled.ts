import styled from "styled-components";

export const StyledOverviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.palette.black[900]};
  border: 1px solid ${({ theme }) => theme.palette.black[500]};
  z-index: 5;

  .card-container {
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    z-index: 5;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      flex: 1;

      span {
        color: ${({ theme }) => theme.palette.black[500]};
      }

      h2 {
        color: ${({ theme }) => theme.palette.gray[500]};
      }
    }

    .divisive {
      width: 1px;
      height: 70px;
      background-color: ${({ theme }) => theme.palette.black[500]};
      margin: 0 10px;
    }

    &:last-child .divisive {
      display: none;
    }
  }
`;
