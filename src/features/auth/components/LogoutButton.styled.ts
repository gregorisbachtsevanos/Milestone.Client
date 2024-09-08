import styled from "styled-components";

export const StyledLogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.violet[400][400]};

  &:disabled {
    color: ${({ theme }) => theme.palette.black[800]};
  }
`;
