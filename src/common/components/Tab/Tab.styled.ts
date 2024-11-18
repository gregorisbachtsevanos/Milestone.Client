import styled from "styled-components";

export const StyledTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.black[500]};
  width: 250px;
  height: 100px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  gap: 7px;

  &:hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.palette.black[700]};
  }
`;
