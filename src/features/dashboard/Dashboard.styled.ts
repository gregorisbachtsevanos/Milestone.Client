import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;

  .sections {
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
