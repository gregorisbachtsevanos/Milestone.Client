import { useCallback, useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { StyledLoginForm } from "./Login.styled";
// import { usersAPI } from "../../../../app/services/usersAPI";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  // const location = useLocation();
  const navigate = useNavigate();
  // const state = location.state as { from: Location };
  // const from = state ? state.from.pathname : "/";
  const from = "/";

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const submitLoginForm = useCallback(
    (data: FieldValues) => {
      const loginFormData = data as LoginFormData;
      login.request({
        email: loginFormData.email,
        password: loginFormData.password,
      });
    },
    [login]
  );

  useEffect(() => {
    if (login.isLoginSuccessful) navigate(from);
  }, [from, login.isLoginSuccessful, navigate]);

  return <StyledLoginForm onSubmit={handleSubmit(submitLoginForm)}></StyledLoginForm>;
};

export default Login;
