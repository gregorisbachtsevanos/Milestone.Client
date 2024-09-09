import { FC } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { useTheme } from "styled-components";
import { ReactComponent as Milestone } from "../svg/milestoneYellowLines.svg";

interface IconProps {
  name: string;
  size?: string | number;
}

const Icons: FC<IconProps> = ({ name, size = "30px" }) => {
  const {
    palette: { yellow },
  } = useTheme();

  const props = {
    color: yellow[500],
    size,
  };

  switch (name) {
    case "milestone":
      return <Milestone {...props} />;
    case "projects":
      return <FaProjectDiagram {...props} />;
    case "goals":
      return <GoGoal {...props} />;
    case "progress":
      return <TbProgressCheck {...props} />;
    default:
      return null;
  }
};

export default Icons;
