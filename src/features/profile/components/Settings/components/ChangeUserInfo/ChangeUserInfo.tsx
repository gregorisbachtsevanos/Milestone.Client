import { FC, useCallback } from "react";
import Panel from "../Panel";
import useInitEditProfileForm from "../../hooks/useInitEditProfileForm";
import { StyledChangeUserInfoContainer } from "./ChangeUserInfo.styled";
import { Controller, FieldValues } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface ChangeUserInfoProps {
  isOpen: boolean;
  handleModal: () => void;
}

const ChangeUserInfo: FC<ChangeUserInfoProps> = ({ isOpen, handleModal }) => {
  const { methods } = useInitEditProfileForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitLoginForm = useCallback((data: FieldValues) => {
    const changedFormData = data;
    console.log(changedFormData);
    // updateProfile.request({
    //   firstname: changedFormData.firstname,
    //   lastname: changedFormData.lastname,
    //   username: changedFormData.username,
    //   email: changedFormData.email,
    // });
  }, []);

  return (
    <Panel title="Edit Profile" isOpen={isOpen} onClose={handleModal}>
      <StyledChangeUserInfoContainer onSubmit={handleSubmit(submitLoginForm)}>
        <input type="file" />
        <Controller
          key="firstname"
          control={control}
          name="firstname"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Firstname"
              error={errors.firstname?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Controller
          key="lastname"
          control={control}
          name="lastname"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Lastname"
              error={errors.lastname?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Controller
          key="username"
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Username"
              error={errors.username?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Controller
          key="email"
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Email"
              error={errors.email?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Button type="submit" variant="primary">
          Save
        </Button>
      </StyledChangeUserInfoContainer>
    </Panel>
  );
};

export default ChangeUserInfo;
