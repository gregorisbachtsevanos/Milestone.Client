import { Caption, Text } from "@/theme";
import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { StyledInputContainer } from "./Input.styled";
import Icons from "../Icon/Icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
  hasBtn?: string;
  variant?: "dark";
  openModal?: () => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, icon, error, hasBtn, openModal, className, ...rest },
  ref
) => {
  return (
    <StyledInputContainer>
      {label && <Text>{label}</Text>}
      <div className={`input ${className}`} {...rest}>
        {icon && <Icons name={icon} size="20px" color="white" />}
        <input {...rest} ref={ref} />
        {hasBtn && (
          <Caption className="button" onClick={openModal}>
            {hasBtn}
          </Caption>
        )}
      </div>
      {error && <Caption className="error">{error}</Caption>}
    </StyledInputContainer>
  );
};

export default forwardRef(Input);
