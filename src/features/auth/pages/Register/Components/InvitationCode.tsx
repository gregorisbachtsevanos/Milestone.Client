import Input from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { invitationValidationSchema } from "../validation";
import { StyledInvitationCodeForm } from "./InvitationCode.styled";

interface InvalidationCodeProps {
  handleInvitationSubmit: () => void;
}

const InvitationCode: FC<InvalidationCodeProps> = ({ handleInvitationSubmit }) => {
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
    <StyledInvitationCodeForm onSubmit={handleSubmit(handleInvitationSubmit)}>
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
    </StyledInvitationCodeForm>
  );
};

export default InvitationCode;
