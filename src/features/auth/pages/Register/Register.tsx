import Input from "@/components/Input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formFieldsIsColumn, formFieldsIsRow } from "../../constants";
import useAuth from "../../hooks/useAuth";
import useInitRegisterForm from "../../hooks/useInitRegisterForm";
import InvitationModal from "./Components/InvitationModal/InvitationModal";
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
      console.log(data);
      // const registerFormData = data as RegisterFormData;
      // register.request({
      //   firstname: registerFormData.firstname,
      //   lastname: registerFormData.lastname,
      //   username: registerFormData.username,
      //   email: registerFormData.email,
      //   password: registerFormData.password,
      // });
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
        <div className="row">
          {formFieldsIsRow.map(({ name, label, type, icon }) => (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={label}
                  error={errors[name]?.message}
                  type={type}
                  icon={icon}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          ))}
        </div>
        <div className="column">
          {formFieldsIsColumn.map(({ name, label, type, icon, btn }) => (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field: { value, onChange } }) => (
                <Input
                  label={label}
                  error={errors[name]?.message}
                  type={type}
                  icon={icon}
                  value={value}
                  onChange={onChange}
                  hasBtn={btn}
                  openModal={openInvitationModal}
                />
              )}
            />
          ))}
        </div>
        <button>submit</button>
      </StyledRegisterForm>
      <InvitationModal isOpen={invitationModal} onCLose={() => setInvitationModal(false)} />
    </>
  );
};

export default Register;
