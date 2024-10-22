import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newTaskValidationSchema } from "../validation/newTaskValidationSchema";

const useInitNewTaskForm = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "",
      priority: "",
      tags: [],
    },
    mode: "onBlur",
    resolver: yupResolver(newTaskValidationSchema),
  });

  return { methods };
};

export default useInitNewTaskForm;
