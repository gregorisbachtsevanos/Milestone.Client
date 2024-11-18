import { Text } from "@/.config/theme";
import { FC } from "react";
import { StyledTabContainer } from "./Tab.styled";
import Icons from "../Icon";
import { IconName } from "../Icon/Icons";

interface TabProps {
  title: string;
  icon: IconName;
  onClick?: () => void;
}

const Tab: FC<TabProps> = ({ title, icon, onClick }) => {
  return (
    <StyledTabContainer onClick={onClick}>
      <Text>{title}</Text>
      <Icons name={icon} color={"gray"} size="22px" />
    </StyledTabContainer>
  );
};

export default Tab;
