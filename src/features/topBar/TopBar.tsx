import Button from "@/components/Button";
import Icons, { IconProps } from "@/components/Icon/Icons";
import { StyledTopBarContainer } from "./TopBar.styled";

const TopBar = () => {
  const props: Omit<IconProps, "name"> = { color: "gray", size: "20px" };

  return (
    <StyledTopBarContainer>
      <div className="logo">
        <Icons name="milestone" size={"100px"} />
      </div>
      <div className="buttons">
        <Button>
          <Icons name="notifications" {...props} />
        </Button>
        <Button>
          <Icons name="user" {...props} />
        </Button>
      </div>
    </StyledTopBarContainer>
  );
};

export default TopBar;
