import Button from "@/components/Button";
import Input from "@/components/Input";
import { FC, useCallback } from "react";
import { Controller, FieldValues } from "react-hook-form";
import useInitUpdatePasswordForm from "../../hooks/useInitUpdatePasswordForm";
import Panel from "../Panel";
import { StyledCaptionContainer, StyledUpdatePasswordContainer } from "./UpdatePassword.styled";

interface UpdatePasswordProps {
  isOpen: boolean;
  handleModal: () => void;
}

const UpdatePassword: FC<UpdatePasswordProps> = ({ isOpen, handleModal }) => {
  const { methods } = useInitUpdatePasswordForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitLoginForm = useCallback((data: FieldValues) => {
    const updatedFormData = data;
    console.log(updatedFormData);
    // updatePassword.request({
    //   oldPassword: updatedFormData.oldPassword,
    //   newPassword: updatedFormData.newPassword,
    //   confirmNewPassword: updatedFormData.confirmNewPassword,
    // });
  }, []);

  return (
    <Panel title="Update Password" isOpen={isOpen} onClose={handleModal}>
      <StyledUpdatePasswordContainer onSubmit={handleSubmit(submitLoginForm)}>
        <Controller
          key="oldPassword"
          control={control}
          name="oldPassword"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Old Password"
              error={errors.oldPassword?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Controller
          key="newPassword"
          control={control}
          name="newPassword"
          render={({ field: { value, onChange } }) => (
            <Input
              label="New Password"
              error={errors.newPassword?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <Controller
          key="confirmNewPassword"
          control={control}
          name="confirmNewPassword"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Confirm New Password"
              error={errors.confirmNewPassword?.message as string}
              value={value}
              onChange={onChange}
              variant="dark"
            />
          )}
        />
        <div className="btn-container">
          <Button type="submit" variant="primary">
            Update Password
          </Button>
        </div>
      </StyledUpdatePasswordContainer>
      <StyledCaptionContainer>
        * To keep your account secure, we recommend you follow these best practices:
        <ul>
          <li>Use a password manager to generate a password of at least 15 characters.</li>
          <li>
            Generate a unique password for Milestone. If you use your Milestone password elsewhere
            and that service is compromised, then attackers or other malicious actors could use that
            information to access your account.
          </li>
          <li>
            Never share your password, even with a potential collaborator. Each person should use
            their own personal account on Milestone.
          </li>
        </ul>
      </StyledCaptionContainer>
    </Panel>
  );
};

export default UpdatePassword;
