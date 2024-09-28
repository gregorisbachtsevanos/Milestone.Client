import Select from "@/components/Select";
import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";

const options = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Select options={options} defaultValue={options[0]} />
    </StyledProfileController>
  );
});

export default Profile;
