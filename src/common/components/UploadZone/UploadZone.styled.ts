import styled from "styled-components";

export const StyledUploadZoneContainer = styled.div`
  /* border: 2px dashed ${({ theme }) => theme.palette.gray[500]}; */
  border-radius: 100px;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
