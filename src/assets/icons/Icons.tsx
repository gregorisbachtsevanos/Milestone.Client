import { FC } from "react";
import {
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaProjectDiagram,
  FaRegUserCircle,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { useTheme } from "styled-components";
// import { ReactComponent as Milestone } from "assets/svg/milestoneYellowLines.svg";
import Milestone from "assets/svg/milestoneYellowLines.svg";
import { CiLock } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { ImQrcode } from "react-icons/im";
import { MdClear, MdOutlineEmail } from "react-icons/md";

interface IconProps {
  name: string;
  color?: "yellow" | "white" | "black";
  size?: string | number;
}

const Icons: FC<IconProps> = ({ name, color, size = "30px" }) => {
  const {
    palette: { yellow, white, black },
  } = useTheme();

  const getColor = () => {
    switch (color) {
      case "yellow":
        return yellow[500];
      case "white":
        return white[900];
      case "black":
        return black[800];
      default:
        return yellow[500];
    }
  };

  const props = {
    color: getColor(),
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
    case "linkedin":
      return <FaLinkedinIn {...props} />;
    case "email":
      return <MdOutlineEmail {...props} />;
    case "password":
      return <CiLock {...props} />;
    case "username":
      return <FaRegUserCircle {...props} />;
    case "name":
      return <FiUserPlus {...props} />;
    case "invitation":
      return <ImQrcode {...props} />;
    case "clear":
      return <MdClear {...props} />;
    default:
      return null;
  }
};
export default Icons;
