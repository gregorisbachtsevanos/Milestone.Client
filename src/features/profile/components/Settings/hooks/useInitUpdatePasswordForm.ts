import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { updatePasswordValidationSchema } from "../validations/updatePasswordValidationSchema";

const useInitUpdatePasswordForm = () => {
  const methods = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  return { methods };
};

export default useInitUpdatePasswordForm;
