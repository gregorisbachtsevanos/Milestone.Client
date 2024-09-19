import Button from "@/components/Button";
import { StyledThirdPartyAuthContainer } from "./ThirdPartyAuth.styled";
import { Badge } from "@/theme";
import Icons from "@/components/Icon/Icons";

const ThirdPartyAuth = () => {
  const authProviders = [
    { name: "google", label: "Google" },
    { name: "linkedin", label: "Linkedin" },
    { name: "github", label: "Github" },
  ];

  return (
    <StyledThirdPartyAuthContainer>
      <div className="buttons">
        {authProviders.map(({ name, label }) => (
          <Button key={name} variant="ghost" disabled>
            <Icons name={name} color="black" size="15px" />
            {label}
          </Button>
        ))}
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
