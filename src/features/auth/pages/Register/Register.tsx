import { RegisterProps } from "@/app/services/types/identityTypes";
import Button from "@/components/Button";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ThirdPartyAuth from "../../components/ThirdPartyAuth";
import useAuth from "../../hooks/useAuth";
import ColumnInputFields from "./Components/ColumnInputFields";
import InvitationModal from "./Components/InvitationModal/InvitationModal";
import RowInputFields from "./Components/RowInputFields/RowInputFields";
import useInitRegisterForm from "./hooks/useInitRegisterForm";
import { StyledRegisterForm } from "./Register.styled";
// import { usersAPI } from "../../../../app/services/usersAPI";

const Register = () => {
  const [invitationModal, setInvitationModal] = useState(false);
  const {
    register,
    register: { isRegisterSuccessful },
  } = useAuth();

  const navigate = useNavigate();
  const from = useMemo(() => "/", []);

  const { methods } = useInitRegisterForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitRegisterForm = useCallback(
    (data: FieldValues) => {
      const registerFormData = data as RegisterProps;
      register.request({
        firstname: registerFormData.firstname,
        lastname: registerFormData.lastname,
        username: registerFormData.username,
        email: registerFormData.email,
        password: registerFormData.password,
        invitation: registerFormData.invitation,
      });
    },
    [register]
  );

  useEffect(() => {
    if (isRegisterSuccessful) navigate(from);
  }, [from, isRegisterSuccessful, navigate]);

  const openInvitationModal = useCallback(() => {
    setInvitationModal(true);
  }, []);

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(submitRegisterForm)}>
        <ThirdPartyAuth />
        <RowInputFields control={control} errors={errors} openModal={openInvitationModal} />
        <ColumnInputFields control={control} errors={errors} openModal={openInvitationModal} />
        <Button type="submit">Register</Button>
      </StyledRegisterForm>
      <InvitationModal isOpen={invitationModal} onCLose={() => setInvitationModal(false)} />
    </>
  );
};

export default Register;
