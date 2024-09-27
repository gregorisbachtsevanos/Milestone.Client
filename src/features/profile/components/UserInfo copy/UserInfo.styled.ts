import styled from "styled-components";

export const StyledUserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .user {
    display: flex;
    align-items: center;
    gap: 10px;

    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      width: 45px;
      height: 45px;
      background-color: ${({ theme }) => theme.palette.yellow[500]};
    }

    .info {
      display: flex;
      flex-direction: column;

      .username {
        color: ${({ theme }) => theme.palette.gray[500]};
      }
    }
  }
`;
