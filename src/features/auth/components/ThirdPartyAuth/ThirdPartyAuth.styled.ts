import styled from "styled-components";

export const StyledThirdPartyAuthContainer = styled.div`
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .option {
    padding: 40px 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .line {
      width: 50%;
      height: 1px;
      background-color: ${({ theme }) => theme.palette.gray[500]};
      margin: 0 8px;
    }
  }
`;
