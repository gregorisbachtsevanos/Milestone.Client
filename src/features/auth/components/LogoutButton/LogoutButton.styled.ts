import styled from "styled-components";

export const StyledLogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.palette.yellow[500]};

  &:disabled {
    color: ${({ theme }) => theme.palette.black[500]};
  }
`;
