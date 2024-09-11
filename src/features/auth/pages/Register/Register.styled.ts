import styled from "styled-components";

export const StyledRegisterForm = styled.form`
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

  .row {
    display: flex;
    gap: 30px;
  }
`;
