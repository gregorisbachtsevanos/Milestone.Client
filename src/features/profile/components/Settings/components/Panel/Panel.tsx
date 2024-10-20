import Icons from "@/common/components/Icon";
import { Title } from "@/theme";
import { StyledPanelContainer } from "./Panel.styled";
import { FC, ReactNode } from "react";

interface PanelProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Panel: FC<PanelProps> = ({ title, isOpen, children, onClose }) => {
  return (
    <StyledPanelContainer className={isOpen ? "open" : ""}>
      <div className="header">
        <Title>{title}</Title>
        <div onClick={onClose}>
          <Icons name="close" color="gray" />
        </div>
      </div>
      {children}
    </StyledPanelContainer>
  );
};

export default Panel;
