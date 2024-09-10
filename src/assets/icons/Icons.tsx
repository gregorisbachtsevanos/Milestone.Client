import { FC } from "react";
import { FaGithub, FaGoogle, FaProjectDiagram, FaRegUserCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { useTheme } from "styled-components";
// import { ReactComponent as Milestone } from "assets/svg/milestoneYellowLines.svg";
import Milestone from "assets/svg/milestoneYellowLines.svg";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";

interface IconProps {
  name: string;
  color?: string;
  size?: string | number;
}

const Icons: FC<IconProps> = ({ name, color, size = "30px" }) => {
  const {
    palette: { yellow },
  } = useTheme();

  const props = {
    color: color || yellow[500],
    size,
  };

  switch (name) {
    case "milestone":
      // return <Milestone {...props} />;
      return <img src={Milestone} alt="Milestone Icon" />;
    case "projects":
      return <FaProjectDiagram {...props} />;
    case "goals":
      return <GoGoal {...props} />;
    case "progress":
      return <TbProgressCheck {...props} />;
    case "google":
      return <FaGoogle {...props} />;
    case "github":
      return <FaGithub {...props} />;
    case "email":
      return <MdOutlineEmail {...props} />;
    case "password":
      return <CiLock {...props} />;
    case "username":
      return <FaRegUserCircle {...props} />;
    case "name":
      return <FiUserPlus {...props} />;
    default:
      return null;
  }
};

export default Icons;
