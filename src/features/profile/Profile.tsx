import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import ThemeAndLanguage from "./components/ThemeAndLanguage";
import UserInfo from "./components/UserInfo";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <ThemeAndLanguage />
      {/* OPTIONS */}
      {/* Theme */}
      {/* Notification */}
      {/* ACCOUNT */}
      {/* Edit profile */}
      {/* Security */}
      {/* Language */}
      {/* GENERAL */}
    </StyledProfileController>
  );
});

export default Profile;
