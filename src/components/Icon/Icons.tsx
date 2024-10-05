import { FC } from "react";
import { useTheme } from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import * as FiIcons from "react-icons/fi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import Milestone from "assets/svg/milestoneYellowLines.svg";

type IconName = keyof typeof IconsMap;
export interface IconProps {
  name: IconName;
  color?: "yellow" | "white" | "black" | "darkGray" | "gray" | "red";
  size?: string | number;
}

const IconsMap = {
  milestone: Milestone,
  overview: GoIcons.GoHomeFill,
  projects: FaIcons.FaProjectDiagram,
  goals: GoIcons.GoGoal,
  calendar: FaIcons.FaCalendar,
  user: FaIcons.FaRegUser,
  settings: Io5Icons.IoSettingsOutline,
  chat: BsIcons.BsChatFill,
  progress: TbIcons.TbProgressCheck,
  google: FaIcons.FaGoogle,
  github: FaIcons.FaGithub,
  linkedin: FaIcons.FaLinkedinIn,
  email: MdIcons.MdOutlineEmail,
  password: CiIcons.CiLock,
  username: FaIcons.FaRegUserCircle,
  name: FiIcons.FiUserPlus,
  invitation: ImIcons.ImQrcode,
  clear: MdIcons.MdClear,
  notifications: Io5Icons.IoNotificationsOutline,
  add: Io5Icons.IoAddCircle,
  send: LuIcons.LuSend,
  locked: IoIcons.IoMdLock,
  logout: IoIcons.IoIosLogOut,
  info: FaIcons.FaInfo,
  danger: CgIcons.CgDanger,
  arrow_up: MdIcons.MdKeyboardArrowUp,
  arrow_down: MdIcons.MdOutlineKeyboardArrowDown,
  arrow_right: MdIcons.MdKeyboardArrowRight,
  verified: MdIcons.MdVerified,
} as const;

const Icons: FC<IconProps> = ({ name, color, size = "30px" }) => {
  const {
    palette: { yellow, white, black, gray, red },
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
      case "red":
        return red[500];
      default:
        return yellow[500];
    }
  };

  const IconComponent = IconsMap[name];

  return name === "milestone" ? (
    <img src={Milestone} alt="Milestone Icon" width={size} />
  ) : (
    IconComponent && <IconComponent color={getColor()} size={size} />
  );
};

export default Icons;
