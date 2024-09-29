import { StyledCardContainer } from "./Card.styled";

const Card = ({
  children,
  withoutMargin,
}: {
  children: React.ReactNode;
  withoutMargin: boolean;
}) => {
  return (
    <StyledCardContainer className={withoutMargin ? "no-margin" : ""}>
      {children}
    </StyledCardContainer>
  );
};

export default Card;
