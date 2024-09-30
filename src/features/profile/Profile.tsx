import Select from "@/components/Select";
import { forwardRef } from "react";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";
import Radio from "@/components/Radio";
import Switch from "@/components/Switch";

const options = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Select label="Theme:" options={options} defaultValue={options[0]} />
      <Radio label="test" />
      <Switch />
    </StyledProfileController>
  );
});

export default Profile;
