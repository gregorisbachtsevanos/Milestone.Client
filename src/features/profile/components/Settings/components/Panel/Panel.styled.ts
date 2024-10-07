import styled from "styled-components";

export const StyledPanelContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 400px;
  top: 0;
  padding: 15px;
  transition: left 0.8s ease;
  background-color: darkcyan;
  /* background-color: ${({ theme }) => theme.palette.black[800]}; */
  border-radius: 15px;

  &.open {
    left: 0;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: ${({ theme }) => theme.palette.gray[500]};
    }

    svg {
      cursor: pointer;
    }
  }
`;
