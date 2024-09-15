import Icons from "@/assets/icons/Icons";
import Button from "@/components/Button";
import { StyledThirdPartyAuthContainer } from "./ThirdPartyAuth.styled";
import { Badge } from "@/theme";

const ThirdPartyAuth = () => {
  const props = { color: "black", size: "15px" };
  return (
    <StyledThirdPartyAuthContainer>
      <div className="buttons">
        <Button styleType="ghost" disabled>
          <Icons name="google" {...props} />
          Google
        </Button>
        <Button styleType="ghost" disabled>
          <Icons name="linkedin" {...props} />
          Linkedin
        </Button>
        <Button styleType="ghost" disabled>
          <Icons name="github" {...props} />
          Github
        </Button>
      </div>
      <div className="option">
        <div className="line"></div>
        <Badge>Or</Badge>
        <div className="line"></div>
      </div>
    </StyledThirdPartyAuthContainer>
  );
};

export default ThirdPartyAuth;
