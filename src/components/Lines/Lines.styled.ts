import styled from "styled-components";

export const StyledLineContainer = styled.div`
  opacity: 0.5;
  * {
    position: absolute;
    width: 53%;
    height: 1px;
    background: ${({ theme }) => theme.palette.yellow[500]};
    background-size: 20px 20px;
    transform: rotate(-50deg);
  }
  .line-1 {
    top: -20%;
    left: 45%;
  }
  .line-2 {
    top: -7%;
    left: 45%;
  }
  .line-3 {
    top: 5%;
    left: 45%;
  }
  .line-4 {
    top: 17%;
    left: 45%;
  }

  .line-5 {
    top: 30%;
    left: 45%;
  }
  .center {
    top: 43%;
    left: 45%;
  }
  .line-6 {
    top: 43%;
    left: 50.5%;
  }

  .line-7 {
    top: 43%;
    left: 56%;
  }
  .line-8 {
    top: 43%;
    left: 61.5%;
  }
  .line-9 {
    top: 43%;
    left: 67%;
  }
  .line-10 {
    top: 43%;
    left: 72.5%;
  }
`;
