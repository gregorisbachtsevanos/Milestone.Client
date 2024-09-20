import styled from "styled-components";

export const StyledMainLayout = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.black[900]};
  padding-top: 5px;

  .sidemenu-content {
    padding: 28px 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
    align-items: center;
  }

  section {
    flex: 1;
    padding-top: calc(70px + 24px);
    max-width: 100%;
    overflow: hidden;
    position: relative;
  }
`;
