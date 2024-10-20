import Icons from "@/common/components/Icon/Icons";
import useActiveTab from "@/common/hooks/useActiveTab";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { StyledBottomContainer, StyledListItem, StyledTitle } from "./BottomBar.styled";
import { navItems } from "./constants";

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState(useActiveTab());

  const handleTabClick = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (
    <StyledBottomContainer>
      {navItems.map(({ label, name, route }) => (
        <Link to={route} key={name} onClick={() => handleTabClick(name)}>
          <StyledListItem isActive={activeTab === name}>
            <Icons name={name} color="darkGray" size={25} />
            {activeTab === name && <StyledTitle>{label}</StyledTitle>}
          </StyledListItem>
        </Link>
      ))}
    </StyledBottomContainer>
  );
};

export default BottomBar;
