import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
    </StyledProfileController>
  );
});

export default Profile;
