import React from "react";
import { StyledInfoContainer } from "./Info.styled";
import Tooltip from "../Tooltip";
import Icon from "../Icon";

interface InfoProps {
  message: string;
  messagePosition: "left" | "right" | "top" | "bottom";
}

const Info: React.FC<InfoProps> = ({ message, messagePosition }) => {
  return (
    <StyledInfoContainer>
      <Tooltip position={messagePosition} tooltipText={message}>
        <Icon name="info" />
      </Tooltip>
    </StyledInfoContainer>
  );
};

export default Info;
