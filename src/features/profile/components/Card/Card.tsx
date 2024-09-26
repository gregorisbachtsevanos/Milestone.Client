import { StyledCardContainer } from "./Card.styled";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <StyledCardContainer>{children}</StyledCardContainer>;
};

export default Card;
