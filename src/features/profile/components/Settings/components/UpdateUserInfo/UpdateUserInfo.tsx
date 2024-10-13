import { FC, useCallback } from "react";
import Panel from "../Panel";
import useInitEditProfileForm from "../../hooks/useInitEditProfileForm";
import { StyledUpdateUserInfoContainer } from "./UpdateUserInfo.styled";
import { Controller, FieldValues } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import UploadZone from "@/components/UploadZone";

interface UpdateUserInfoProps {
  isOpen: boolean;
  handleModal: () => void;
}

const UpdateUserInfo: FC<UpdateUserInfoProps> = ({ isOpen, handleModal }) => {
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
    <Panel title="Update Profile" isOpen={isOpen} onClose={handleModal}>
      <StyledUpdateUserInfoContainer onSubmit={handleSubmit(submitLoginForm)}>
        <UploadZone />

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
        <div className="btn-container">
          <Button type="submit" variant="primary">
            Update Info
          </Button>
        </div>
      </StyledUpdateUserInfoContainer>
    </Panel>
  );
};

export default UpdateUserInfo;
