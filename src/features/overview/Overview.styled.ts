import styled from "styled-components";

export const StyledOverviewContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  z-index: 5;

  .sections {
    gap: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
  }
`;
