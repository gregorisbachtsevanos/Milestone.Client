import Icons from "@/components/Icon/Icons";
import { useState } from "react";
import { StyledBottomContainer, StyledListItem, StyledTitle } from "./BottomBar.styled";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "home", label: "Dashboard" },
    { name: "projects", label: "Projects" },
    { name: "goals", label: "Goals" },
    { name: "calendar", label: "Calendar" },
    { name: "chat", label: "Chat" },
  ];

  const handleTabClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <StyledBottomContainer>
      {navItems.map(({ label, name }) => (
        <StyledListItem
          key={name}
          isActive={activeTab === name}
          onClick={() => handleTabClick(name)}
        >
          <Icons name={name} color="darkGrey" />
          {activeTab === name && <StyledTitle>{label}</StyledTitle>}
        </StyledListItem>
      ))}
    </StyledBottomContainer>
  );
};

export default BottomBar;
