import { TitleXl } from "@/theme";
import Icons from "../Icon/Icons";
import { StyledComingSoonContainer } from "./ComingSoon.styled";

const ComingSoon = ({ size }: { size?: string }) => {
  return (
    <StyledComingSoonContainer>
      <TitleXl>coming soon</TitleXl>
      <Icons name="locked" size={size} />
    </StyledComingSoonContainer>
  );
};

export default ComingSoon;
