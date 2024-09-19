import Icons from "@/components/Icon/Icons";
import { useState } from "react";
import { StyledBottomContainer, StyledListItem, StyledTitle } from "./BottomBar.styled";
import { routes } from "@/routes";
import { Link } from "react-router-dom";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "home", label: "Dashboard", route: routes.HOME },
    { name: "projects", label: "Projects", route: routes.PROJECT.Index },
    { name: "goals", label: "Goals", route: routes.GOALS },
    { name: "calendar", label: "Calendar", route: routes.CALENDAR },
    { name: "chat", label: "Chat", route: routes.CHAT },
  ];

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <StyledBottomContainer>
      {navItems.map(({ label, name, route }) => (
        <Link to={route} key={name} onClick={() => handleTabClick(name)}>
          <StyledListItem isActive={activeTab === name}>
            <Icons name={name} color="darkGrey" size={25} />
            {activeTab === name && <StyledTitle>{label}</StyledTitle>}
          </StyledListItem>
        </Link>
      ))}
    </StyledBottomContainer>
  );
};

export default BottomBar;
