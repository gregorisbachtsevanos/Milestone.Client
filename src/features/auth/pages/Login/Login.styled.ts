import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 40vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  /* box-shadow: 0 4px 40px ${({ theme }) => theme.palette.green[700]};*/
  /* box-shadow: 0 4px 40px ${({ theme }) => theme.palette.black[700]}; */
  box-shadow: 0 -4px 25px ${({ theme }) => theme.palette.black[700]}80,
    0 4px 40px ${({ theme }) => theme.palette.green[700]}80;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(0px);

  .title-container {
    padding: 24px 0;
  }

  .caption {
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2rem;
  }
  a {
    text-align: right;
  }
`;
