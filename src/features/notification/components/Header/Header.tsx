import Button from "@/common/components/Button";
import { TitleLg } from "@/.config/theme";
import { StyledHeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <TitleLg>Notifications</TitleLg>
      <Button variant="link">Mark all as read</Button>
    </StyledHeaderContainer>
  );
};

export default Header;
