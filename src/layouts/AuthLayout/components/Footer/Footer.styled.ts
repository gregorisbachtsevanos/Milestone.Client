import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  * {
    color: ${({ theme }) => theme.palette.gray[500]};
  }
`;
