import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
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
`;
