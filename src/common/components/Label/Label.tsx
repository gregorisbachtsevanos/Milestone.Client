import { Text, TitleSecondary } from "@/.config/theme";
import { forwardRef, ForwardRefRenderFunction, LabelHTMLAttributes, ReactNode } from "react";
import Info from "../Info";
import { StyledLabelContainer } from "./Label.styled";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  className?: string;
  children: ReactNode;
  infoText?: string;
  iconText?: string;
}

const Label: ForwardRefRenderFunction<HTMLLabelElement, LabelProps> = (
  { required, infoText, iconText, className, children, ...rest },
  ref
) => {
  return (
    <StyledLabelContainer className={className} ref={ref} {...rest}>
      {infoText && <Text>{infoText}</Text>}
      {iconText && <Info message={iconText} messagePosition="right" />}
      <TitleSecondary>
        {children} {required && <span className="required">*</span>}
      </TitleSecondary>
    </StyledLabelContainer>
  );
};
export default forwardRef<HTMLLabelElement, LabelProps>(Label);
