import { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const black500 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[500];

export const StyledAuthFormContainer = css`
  width: 33vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 4rem;
  gap: 0.5rem;
`;

export const GlassEffect = css`
  /* box-shadow: 0 -4px 25px ${({ theme }) => theme.palette.black[700]},
    0 4px 40px ${({ theme }) => theme.palette.green[700]};
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(0px); */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.037);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
`;

export const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 8px; /* Adjust width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${black500}; /* Semi-transparent scrollbar thumb */
    border-radius: 10px;
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: ${black500} transparent; /* Thumb color and track color */
`;
