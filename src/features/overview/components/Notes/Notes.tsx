import SingleNote from "@/common/components/SingleNote";
import { NotesType } from "@/types";
import { StyledNotesContainer } from "./Notes.styled";
import { FC } from "react";
import { Title } from "@/.config/theme";
import CreateNewButton from "../CreateNewButton";

interface NotesProps {
  data: NotesType[];
  title: string;
  size?: "small";
  btnTitle: string;
  onBtnClick: () => void;
}

const Notes: FC<NotesProps> = ({ data, title, size, btnTitle, onBtnClick }) => {
  return (
    <StyledNotesContainer className={size}>
      <div className="header">
        <Title>{title}</Title>
        <CreateNewButton title={btnTitle} onOpen={onBtnClick} />
      </div>
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
