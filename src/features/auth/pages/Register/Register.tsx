import Input from "@/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useMemo } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formFieldsIsColumn, formFieldsIsRow } from "../../constants";
import useAuth from "../../hooks/useAuth";
import { StyledRegisterForm } from "./Register.styled";
import { validationSchema } from "./validation";
import Button from "@/components/Button";
// import { usersAPI } from "../../../../app/services/usersAPI";

const Register = () => {
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
    },
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });

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
  console.log(errors);

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submitRegisterForm)}>
      <div className="row">
        {formFieldsIsRow.map(({ name, label, type }) => (
          <Controller
            key={name}
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
              <Input
                label={label}
                error={"error"} // Error handling need validation schema here
                type={type}
                value={value}
                onChange={onChange}
              />
            )}
          />
        ))}
      </div>
      <div className="column">
        {formFieldsIsColumn.map(({ name, label, type }) => (
          <Controller
            key={name}
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
              <Input
                label={label}
                error={"error"} // Error handling need validation schema here
                type={type}
                value={value}
                onChange={onChange}
              />
            )}
          />
        ))}
      </div>
      <Button />
    </StyledRegisterForm>
  );
};

export default Register;
