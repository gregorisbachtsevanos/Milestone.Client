import Select from "@/components/Select";
import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";
import { options } from "./constant";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Select label="Theme:" options={options} defaultValue={options[0]} />
    </StyledProfileController>
  );
});

export default Profile;
