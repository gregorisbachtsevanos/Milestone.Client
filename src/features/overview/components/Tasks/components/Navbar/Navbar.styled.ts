import styled from "styled-components";

export const StyledNavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  background-color: ${({ theme }) => theme.palette.black[700]};
  padding: 20px 7px;
  width: 43vw;
  margin: auto;
  justify-content: space-between;

  .categories {
    flex: 1;
    display: flex;
    gap: 20px;
  }
`;
