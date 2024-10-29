import { Caption } from "@/.config/theme";
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import Input from "../Input";
import { StyledTagsInputContainer } from "./TagsInput.styled";

interface TagsInputProps {
  value: string[];
  onChange: (tags: string[]) => void;
}

const TagsInput: FC<TagsInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event.key === " " || event.key === "Enter") && inputValue.trim() !== "") {
      event.preventDefault();
      addTag();
    }
  };

  const handleBlur = () => {
    if (inputValue.trim() !== "") addTag();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const removeTag = (index: number) => {
    const newTags = value.filter((_, i) => i !== index);
    onChange(newTags);
  };

  const addTag = () => {
    onChange([...value, inputValue.trim()]);
    setInputValue("");
  };

  return (
    <StyledTagsInputContainer>
      <div className="tags-list">
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Add tags"
          variant="gray"
        />

        <div className="tag-container">
          {value.map((tag, index) => (
            <Caption key={index} className="tag">
              {tag}
              <button type="button" onClick={() => removeTag(index)}>
                &times;
              </button>
            </Caption>
          ))}
        </div>
      </div>
    </StyledTagsInputContainer>
  );
};

export default TagsInput;
