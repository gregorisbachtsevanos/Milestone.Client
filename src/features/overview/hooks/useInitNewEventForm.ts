import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newEventValidationSchema } from "../validation/newEventValidationSchema";

const useInitNewEventForm = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      emailNotification: false,
      tags: [],
    },
    mode: "onBlur",
    resolver: yupResolver(newEventValidationSchema),
  });

  return { methods };
};

export default useInitNewEventForm;
