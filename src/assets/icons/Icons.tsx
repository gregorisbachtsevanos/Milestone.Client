import { FaProjectDiagram } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { useTheme } from "styled-components";
import Milestone from "../svg/milestoneYellowLines.svg";
import { FC } from "react";

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
    case "logo":
      return <img src={Milestone} alt="" />;
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
