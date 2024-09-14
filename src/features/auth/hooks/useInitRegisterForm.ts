import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerValidationSchema } from "../pages/Register/validation";

const useInitRegisterForm = () => {
  const methods = useForm({
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

  return { methods };
};

export default useInitRegisterForm;
