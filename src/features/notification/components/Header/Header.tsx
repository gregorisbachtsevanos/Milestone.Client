import React from "react";
import { StyledHeaderContainer } from "./Header.styled";
import { TitleLg, TitleXl } from "@/theme";
import Button from "@/components/Button";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <TitleLg>Notifications</TitleLg>
      <Button variant="link">Mark all as read</Button>
    </StyledHeaderContainer>
  );
};

export default Header;
