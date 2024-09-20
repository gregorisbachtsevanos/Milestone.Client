import styled from "styled-components";

export const StyledOverviewContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.palette.gray[500]};

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    span {
      color: ${({ theme }) => theme.palette.gray[500]};
    }
  }

  .divisive {
    width: 1px;
    height: 70px;
    background-color: ${({ theme }) => theme.palette.gray[500]};
    margin: 0 10px;

    &:last-child {
      display: none;
    }
  }
`;
