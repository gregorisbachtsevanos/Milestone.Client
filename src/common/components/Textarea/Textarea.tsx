import { Caption, Text } from "@/.config/theme";
import { forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from "react";
import { StyledTextareaContainer } from "./Textarea.styled";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: "dark" | "gray";
}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaProps> = (
  { label, error, variant, ...rest },
  ref
) => {
  return (
    <StyledTextareaContainer>
      {label && <Text>{label}</Text>}
      <div className={`textarea ${variant}`}>
        <textarea {...rest} ref={ref} rows={10} />
      </div>
      {error && <Caption className="error">{error}</Caption>}
    </StyledTextareaContainer>
  );
};

export default forwardRef(Textarea);
