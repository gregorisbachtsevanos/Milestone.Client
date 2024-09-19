import Button from "@/components/Button";
import Input from "@/components/Input";
import { useCallback, useEffect } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInitLoginForm from "./hooks/useInitLoginForm";
import { StyledLoginForm } from "./Login.styled";
import ThirdPartyAuth from "../../components/ThirdPartyAuth";

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const from = "/";

  const { methods } = useInitLoginForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitLoginForm = useCallback(
    (data: FieldValues) => {
      const loginFormData = data as LoginFormData;
      console.log(loginFormData);
      login.request({
        username: loginFormData.username,
        password: loginFormData.password,
      });
    },
    [login]
  );

  useEffect(() => {
    if (login.isLoginSuccessful) navigate(from);
  }, [from, login.isLoginSuccessful, navigate]);

  return (
    <StyledLoginForm onSubmit={handleSubmit(submitLoginForm)}>
      <ThirdPartyAuth />
      <Controller
        key="username"
        control={control}
        name="username"
        render={({ field: { value, onChange } }) => (
          <Input
            label="username"
            error={errors.username?.message}
            type="text"
            icon={"username"}
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Controller
        key="password"
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <Input
            label="password"
            error={errors.password?.message}
            type="password"
            icon="password"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <div className="button">
        <Button type="submit" fullWidth variant="primary">
          Login
        </Button>
      </div>
    </StyledLoginForm>
  );
};

export default Login;
