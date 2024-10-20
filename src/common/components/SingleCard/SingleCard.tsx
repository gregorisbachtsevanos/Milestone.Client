import { Text, Title } from "@/theme";
import { Priority, VariantType } from "@/types";
import { remainingDays } from "@/common/utils/dates";
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
      <div className="header">
        <Tags>{remainingDays(deadline)}</Tags>
        <Tags variant={getPriorityVariant(priority)}>{priority}</Tags>
      </div>
      <div className="content">
        <Title>{title}</Title>
        <Text> {description}</Text>
      </div>
      <div className="footer">
        {tags?.map((tag) => (
          <Tags variant="dark" size="small" key={tag}>
            {tag}
          </Tags>
        ))}
      </div>
    </StyledSingleCardContainer>
  );
};

export default SingleCard;
