import SingleNote from "@/common/components/SingleNote";
import { NotesType } from "@/types";
import { StyledNotesContainer } from "./Notes.styled";
import { FC } from "react";
import { Title } from "@/.config/theme";

interface NotesProps {
  data: NotesType[];
  title: string;
  size?: "small";
}

const Notes: FC<NotesProps> = ({ data, title, size }) => {
  return (
    <StyledNotesContainer className={size}>
      <Title>{title}</Title>
      {data.map(({ title, content, created_at, datetime, tags }) => (
        <SingleNote
          key={title}
          title={title}
          content={content}
          date={(created_at ?? datetime) as string}
          tags={tags}
        />
      ))}
    </StyledNotesContainer>
  );
};

export default Notes;
