import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.palette.green[700]};
    border: none;
    border-radius: 5px;
  }
`;
