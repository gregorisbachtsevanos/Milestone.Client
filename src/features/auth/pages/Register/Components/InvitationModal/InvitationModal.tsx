import Input from "@/components/Input";
import Modal from "@/components/Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { invitationValidationSchema } from "../../validation";
import { StyledInvitationModalForm } from "./InvitationModal.styled";
import Button from "@/components/Button";

interface InvitationModalProps {
  isOpen: boolean;
  onCLose: () => void;
}

const InvitationModal: FC<InvitationModalProps> = ({ isOpen, onCLose }) => {
  const requestInvitationCode = useCallback(({ email }: { email: string }) => {
    console.log(email);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
    resolver: yupResolver(invitationValidationSchema),
  });

  return (
    <Modal isOpen={isOpen} onClose={onCLose}>
      <StyledInvitationModalForm onSubmit={handleSubmit(requestInvitationCode)}>
        <Controller
          key="email"
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Email"
              error={errors.email?.message}
              type="email"
              icon={"email"}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Button variant="primary" isLoading={false} disabled={false} type="submit">
          Save
        </Button>
      </StyledInvitationModalForm>
    </Modal>
  );
};

export default InvitationModal;
