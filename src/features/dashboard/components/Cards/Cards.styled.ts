import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.black[700]};
  border: 2px solid ${({ theme }) => theme.palette.black[700]};
  padding: 0 20px;
  gap: 20px;
  width: auto;
  border-radius: 15px;
  max-height: 700px;
  overflow-y: scroll;
  z-index: 5;

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

  /* Optional: For Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: ${({ theme }) => theme.palette.black[500]} transparent; /* Thumb color and track color */

  .cards-container {
    padding-top: 5rem;
    padding-bottom: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 400px 400px;
  }
`;
