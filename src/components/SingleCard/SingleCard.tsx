import { Text, Title } from "@/theme";
import { Priority, VariantType } from "@/types";
import { remainingDays } from "@/utils/dates";
import { FC } from "react";
import Tags from "../Tags";
import { StyledSingleCardContainer } from "./SingleCard.styled";

interface SingleCardProps {
  title: string;
  description: string;
  priority: Priority;
  deadline: string;
  tags?: string[];
}

const getPriorityVariant = (priority: Priority): VariantType => {
  switch (priority) {
    case "low":
      return "success";
    case "medium":
      return "warning";
    case "high":
      return "danger";
    default:
      return "default";
  }
};

const SingleCard: FC<SingleCardProps> = ({ title, description, deadline, priority, tags }) => {
  return (
    <StyledSingleCardContainer>
      <Tags>{remainingDays(deadline)}</Tags>
      <Title>{title}</Title>
      <Text> {description}</Text>
      <Tags variant={getPriorityVariant(priority)}>{priority}</Tags>
      <Tags variant="dark">{tags}</Tags>
    </StyledSingleCardContainer>
  );
};

export default SingleCard;
