import React, { ReactNode, useRef } from "react";
import { Text } from "@/theme";
import { StyledTooltip } from "./Tooltip.styled";

export interface TooltipProps {
  children: ReactNode;
  tooltipText: string;
  position: "left" | "right" | "top" | "bottom";
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltipText, position }) => {
  const tooltipRef = useRef(null);
  return (
    <StyledTooltip className={position ?? ""}>
      {children}
      <span className="tooltip" ref={tooltipRef}>
        <Text>{tooltipText}</Text>
      </span>
    </StyledTooltip>
  );
};
export default Tooltip;
