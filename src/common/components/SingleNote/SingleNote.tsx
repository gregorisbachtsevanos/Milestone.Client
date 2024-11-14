import { Caption, Text, Title } from "@/.config/theme";
import { formatDate } from "@/common/utils/dates";
import { FC } from "react";
import Tags from "../Tags";
import { StyledSingleNoteContainer } from "./SingleNote.styled";

interface SingleNoteProps {
  title: string;
  content: string;
  date: string;
  tags?: string[];
  variant?: "highlighted";
}

const SingleNote: FC<SingleNoteProps> = ({ title, content, date, tags, variant }) => {
  return (
    <StyledSingleNoteContainer className={variant}>
      <div className="header">
        <Title>{title}</Title>
        <Caption>{formatDate(date)}</Caption>
      </div>
      <Text> {content}</Text>
      <div className="footer">
        {tags &&
          tags?.map((tag) => (
            <Tags variant="dark" size="small" key={tag}>
              {tag}
            </Tags>
          ))}
      </div>
    </StyledSingleNoteContainer>
  );
};

export default SingleNote;
