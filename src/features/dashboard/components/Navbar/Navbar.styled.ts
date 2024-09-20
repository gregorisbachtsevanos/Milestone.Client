import styled from "styled-components";

export const StyledNavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  background-color: ${({ theme }) => theme.palette.black[700]};
  padding: 15px;
  width: 43vw;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  position: fixed;

  .categories {
    display: flex;
    flex: 1;
    gap: 20px;
  }
`;
