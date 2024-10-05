import styled from "styled-components";

export const StyledThemeContainer = styled.div`
  display: flex;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.palette.black[900]};
    width: 100%;
    height: 40px;
    color: ${({ theme }) => theme.palette.gray[500]};

    h5 {
      padding: 0 10px;
    }
  }
`;
