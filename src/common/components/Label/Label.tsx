import { TitleSecondary } from "@/theme";
import { forwardRef, ForwardRefRenderFunction, LabelHTMLAttributes, ReactNode } from "react";
import Info from "../Info";
import { StyledLabelContainer } from "./Label.styled";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  className?: string;
  children: ReactNode;
  infoText?: string;
}

const Label: ForwardRefRenderFunction<HTMLLabelElement, LabelProps> = (
  { required, infoText, className, children, ...rest },
  ref
) => {
  return (
    <StyledLabelContainer className={className} ref={ref} {...rest}>
      <TitleSecondary>
        {children} {required && <span className="required">*</span>}
      </TitleSecondary>
      {infoText && <Info message={infoText} messagePosition="right" />}
    </StyledLabelContainer>
  );
};
export default forwardRef<HTMLLabelElement, LabelProps>(Label);
