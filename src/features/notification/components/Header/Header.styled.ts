import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: baseline;
  justify-content: space-between;
  padding: 30px 35px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black[500]};
`;
