import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .section {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .title {
      display: flex;
      align-items: center;
    }

    span {
      color: ${({ theme }) => theme.palette.gray[500]};
    }

    img {
      width: 150px;
    }
  }
`;
