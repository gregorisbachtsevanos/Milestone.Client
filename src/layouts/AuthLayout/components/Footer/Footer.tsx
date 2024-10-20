import { LinkStyle } from "@/.config/theme";
import { StyledFooterContainer } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <LinkStyle>Terms</LinkStyle>
      <i>-</i>
      <LinkStyle>Privacy</LinkStyle>
      <i>-</i>
      <LinkStyle>Docs</LinkStyle>
      <i>-</i>
      <LinkStyle>Help</LinkStyle>
    </StyledFooterContainer>
  );
};

export default Footer;
