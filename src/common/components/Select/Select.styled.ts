import styled from "styled-components";

export const StyledSelectContainer = styled.div`
  width: auto;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  gap: 8px;

  .react-select {
    width: 150px;
  }
  .error {
    margin-top: -4px !important;
  }
  &.column {
    flex-direction: column;
    align-items: flex-start;
  }
`;
