import Select from "@/components/Select";
import { forwardRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyledProfileController } from "./Profile.styled";
import UserInfo from "./components/UserInfo";
import { langOptions, themeOptions } from "./constant";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  const { control } = useForm();

  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Controller
        name="publisher"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            label="Theme:"
            options={themeOptions}
            value={value}
            onChange={onChange}
            ref={ref}
          />
        )}
      />
      <Select label="Language:" options={langOptions} defaultValue={langOptions[0]} />
    </StyledProfileController>
  );
});

export default Profile;
