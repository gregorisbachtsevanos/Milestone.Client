import Button from "@/components/Button";
import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import Edit from "./components/Edit";
import Language from "./components/Language";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Theme />
      <Language />
      <Edit title="Edit Profile" />
      <Edit title="Change Password" />
      <Edit title="My Subscription" />
      <Button variant="danger-outline">Logout</Button>
      <Button variant="danger">Delete Account</Button>
    </StyledProfileController>
  );
});

export default Profile;
