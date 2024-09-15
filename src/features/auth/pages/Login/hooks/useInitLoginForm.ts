import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidationSchema } from "../validation";

const useInitLoginForm = () => {
  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(loginValidationSchema),
  });

  return { methods };
};

export default useInitLoginForm;
