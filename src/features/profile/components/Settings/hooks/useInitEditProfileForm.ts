import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editProfileValidationSchema } from "../validations/editProfileValidationSchema";

const useInitEditProfileForm = () => {
  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
    },
    mode: "onBlur",
    resolver: yupResolver(editProfileValidationSchema),
  });

  return { methods };
};

export default useInitEditProfileForm;
