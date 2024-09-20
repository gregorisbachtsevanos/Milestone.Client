import styled from "styled-components";

export const StyledNotesContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[700]};
  border: 2px solid ${({ theme }) => theme.palette.black[700]};
  padding: 20px 20px;
  gap: 20px;
  border-radius: 15px;
  max-height: 700px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 25%;
  z-index: 5;

  &.small {
    width: 20%;
  }

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Adjust width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.black[500]}; /* Semi-transparent scrollbar thumb */
    border-radius: 10px;
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: ${({ theme }) => theme.palette.black[500]} transparent; /* Thumb color and track color */
`;
