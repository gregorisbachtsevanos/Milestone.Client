import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 33vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  gap: 0.5rem;
  background: ${({ theme }) => theme.palette.white[50]};
  border-radius: 16px;

  box-shadow: 0 -4px 25px ${({ theme }) => theme.palette.black[700]},
    0 4px 40px ${({ theme }) => theme.palette.green[700]};

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(0px);

  .title-container {
    padding: 24px 0;
  }

  .caption {
    text-align: center;
    margin-bottom: 1rem;
  }

  .button {
    margin-top: 1rem;
    padding: 0 7px;
  }

  a {
    text-align: right;
  }
`;
