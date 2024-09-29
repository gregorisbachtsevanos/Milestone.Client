import { Text } from "@/theme";
import React, { InputHTMLAttributes, ReactNode, useId } from "react";
import { StyledRadioContainer } from "./Radio.styled";

interface RadioCustomProps {
  label?: string | ReactNode;
}

type RadioProps = RadioCustomProps & InputHTMLAttributes<HTMLInputElement>;

const Radio: React.ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
  { label = "", ...props },
  ref
) => {
  const { id, ...rest } = props;

  const randomId = useId();

  return (
    <StyledRadioContainer>
      <input type="radio" id={id ?? randomId} ref={ref} {...rest} />
      <label htmlFor={id ?? randomId}>
        {typeof label === "string" ? <Text>{label}</Text> : label}
      </label>
    </StyledRadioContainer>
  );
};

export default React.forwardRef<HTMLInputElement, RadioProps>(Radio);
