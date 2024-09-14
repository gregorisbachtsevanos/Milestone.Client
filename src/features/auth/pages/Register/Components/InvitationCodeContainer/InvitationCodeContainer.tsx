import Input from "@/components/Input";
import { Control, Controller } from "react-hook-form";
import { StyledInvitationCode } from "./InvitationCodeContainer.styled";
import { FC } from "react";

interface InvitationCodeProps {
  control: Control<{ email: string }, any>;
  error?: string;
}

const InvitationCodeContainer: FC<InvitationCodeProps> = ({ control, error }) => {
  return (
    <StyledInvitationCode>
      <Controller
        key="email"
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <Input
            label="Email"
            error={error}
            type="email"
            icon={"email"}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </StyledInvitationCode>
  );
};

export default InvitationCodeContainer;
