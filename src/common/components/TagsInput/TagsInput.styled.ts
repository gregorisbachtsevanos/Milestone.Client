import styled from "styled-components";

export const StyledTagsInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .tags-list {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .tag-container {
      padding-left: 7px;
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      .tag {
        background-color: ${({ theme }) => theme.palette.black[800]};
        color: ${({ theme }) => theme.palette.gray[500]};
        padding: 4px 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        max-width: fit-content;
        flex-wrap: wrap;

        button {
          background: none;
          border: none;
          color: white;
          margin-left: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;
