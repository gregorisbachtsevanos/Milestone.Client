import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";
import Settings from "./components/Settings";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Settings />
    </StyledProfileController>
  );
});

export default Profile;
