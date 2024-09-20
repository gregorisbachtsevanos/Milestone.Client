import SingleNote from "@/components/SingleNote";
import { Title } from "@/theme";
import { NotesType } from "@/types";
import { StyledNotesContainer } from "./Notes.styled";
import { FC } from "react";

interface NotesProps {
  notes: NotesType[];
  title: string;
  size?: "small";
}

const Notes: FC<NotesProps> = ({ notes, title, size }) => {
  return (
    <StyledNotesContainer className={size}>
      <Title>{title}</Title>
      {notes.map(({ title, content, created_at, datetime, tags }) => (
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
