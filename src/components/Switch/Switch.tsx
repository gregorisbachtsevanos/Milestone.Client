import React, { InputHTMLAttributes } from 'react';
import { StyledSwitchContainer } from './Switch.styled';

interface SwitchCustomProps {
  onColor?: string;
  offColor?: string;
}

type SwitchProps = SwitchCustomProps & InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<SwitchProps> = ({ id = 'switch', onColor, offColor, ...props }) => {
  return (
    <StyledSwitchContainer onColor={onColor} offColor={offColor}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id} />
    </StyledSwitchContainer>
  );
};
export default Switch;
