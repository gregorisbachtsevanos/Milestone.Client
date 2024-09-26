import styled from "styled-components";

export const StyledNotificationCardContainer = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.black[500]};

  &.unread {
    background-color: ${({ theme }) => theme.palette.black[600]};
  }

  span:first-child {
    width: 80%;
  }
  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
