import { Caption, Text } from "@/theme";
import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { StyledInputContainer } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, className, ...rest },
  ref
) => {
  return (
    <StyledInputContainer className={className}>
      <Text>{label}</Text>
      <input {...rest} className={className} ref={ref} />
      {error && <Caption className="error">{error}</Caption>}
    </StyledInputContainer>
  );
};

export default forwardRef(Input);
