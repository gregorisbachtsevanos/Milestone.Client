import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formFieldsIsColumn, formFieldsIsRow } from "../../constants";
import useAuth from "../../hooks/useAuth";
import { StyledRegisterForm } from "./Register.styled";
import { registerValidationSchema } from "./validation";
import InvitationCode from "./Components/InvitationCode";
// import { usersAPI } from "../../../../app/services/usersAPI";

const Register = () => {
  const [invitationModal, setInvitationModal] = useState(false);
  const {
    register,
    register: { isRegisterSuccessful },
  } = useAuth();
  const navigate = useNavigate();
  const from = useMemo(() => "/", []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      invitation: "",
    },
    mode: "onBlur",
    resolver: yupResolver(registerValidationSchema),
  });

  const requestInvitationCode = useCallback(() => {
    console.log(1);
    setInvitationModal(false);
  }, []);

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
        {formFieldsIsColumn.map(({ name, label, type, icon, btn }) => {
          console.log(errors[name]?.message);
          return (
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
          );
        })}
      </div>
      <Modal
        withButtons
        isOpen={invitationModal}
        onClose={() => setInvitationModal(false)}
        buttonText="Send"
      >
        <InvitationCode handleInvitationSubmit={requestInvitationCode} />
      </Modal>
      <Button />
    </StyledRegisterForm>
  );
};

export default Register;
