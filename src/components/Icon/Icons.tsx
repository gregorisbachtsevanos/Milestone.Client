import { FC } from "react";
import {
  FaCalendar,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaProjectDiagram,
  FaRegUser,
  FaRegUserCircle,
} from "react-icons/fa";
import { GoGoal, GoHomeFill } from "react-icons/go";
import { TbProgressCheck } from "react-icons/tb";
import { useTheme } from "styled-components";
// import { ReactComponent as Milestone } from "assets/svg/milestoneYellowLines.svg";
import Milestone from "assets/svg/milestoneYellowLines.svg";
import { BsChatFill } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { ImQrcode } from "react-icons/im";
import { IoAddCircle, IoNotificationsOutline, IoSend, IoSettingsOutline } from "react-icons/io5";
import { MdClear, MdOutlineEmail } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";

export interface IconProps {
  name: string;
  color?: "yellow" | "white" | "black" | "darkGray" | "gray";
  size?: string | number;
}

const Icons: FC<IconProps> = ({ name, color, size = "30px" }) => {
  const {
    palette: { yellow, white, black, gray },
  } = useTheme();

  const getColor = () => {
    switch (color) {
      case "yellow":
        return yellow[500];
      case "white":
        return white[900];
      case "black":
        return black[800];
      case "darkGray":
        return black[500];
      case "gray":
        return gray[500];
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
      return <img src={Milestone} alt="Milestone Icon" width={size} />;
    case "home":
      return <GoHomeFill {...props} />;
    case "projects":
      return <FaProjectDiagram {...props} />;
    case "goals":
      return <GoGoal {...props} />;
    case "calendar":
      return <FaCalendar {...props} />;
    case "user":
      return <FaRegUser {...props} />;
    case "settings":
      return <IoSettingsOutline {...props} />;
    case "chat":
      return <BsChatFill {...props} />;
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
    case "notifications":
      return <IoNotificationsOutline {...props} />;
    case "add":
      return <IoAddCircle {...props} />;
    case "send":
      return <LuSend {...props} />;
    case "locked":
      return <IoMdLock {...props} />;
    default:
      return null;
  }
};
export default Icons;
