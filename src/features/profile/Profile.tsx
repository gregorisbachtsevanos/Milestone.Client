import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";
import Card from "./components/Card";
import Language from "./components/Language";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      {/* Change info */}
      {/* Change password */}
      <Card withoutMargin>
        <Theme />
      </Card>
      <Card withoutMargin>
        <Language />
      </Card>
      {/* Logout */}
      {/* Delete account */}
    </StyledProfileController>
  );
});

export default Profile;
