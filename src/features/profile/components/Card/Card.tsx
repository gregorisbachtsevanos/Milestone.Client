import { FC } from "react";
import { StyledCardContainer } from "./Card.styled";

interface CardProps {
  children: React.ReactNode;
  withoutMargin?: boolean;
  size?: "small";
}

const Card: FC<CardProps> = ({ children, withoutMargin, size, ...rest }) => {
  const allClasses = [withoutMargin ? "no-margin" : "", size || ""].filter(Boolean).join(" ");

  return (
    <StyledCardContainer className={allClasses} {...rest}>
      {children}
    </StyledCardContainer>
  );
};

export default Card;
