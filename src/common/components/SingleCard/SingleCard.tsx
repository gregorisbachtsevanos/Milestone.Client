import { Text, Title } from "@/.config/theme";
import { timePassSince } from "@/common/utils/dates";
import { Priority, VariantType } from "@/types";
import { FC } from "react";
import Tags from "../Tags";
import { StyledSingleCardContainer } from "./SingleCard.styled";

interface SingleCardProps {
  title: string;
  description: string;
  priority: Priority;
  createdDate: string;
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

const SingleCard: FC<SingleCardProps> = ({ title, description, createdDate, priority, tags }) => {
  return (
    <StyledSingleCardContainer>
      <div className="header">
        <Tags>{timePassSince(new Date(createdDate))}</Tags>
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
