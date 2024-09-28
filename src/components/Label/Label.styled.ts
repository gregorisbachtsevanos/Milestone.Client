import styled from "styled-components";

export const StyledLabelContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  h5 {
    color: ${({ theme }) => theme.palette.gray[500]};
  }

  span.required {
    color: ${({ theme }) => theme.palette.red[500]};
  }
`;
