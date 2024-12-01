import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newSubtaskValidationSchema } from "../validation/newSubtaskValidationSchema";
import { PriorityOptions, StatusOptions } from "../types";

const useInitNewSubtaskForm = () => {
  const methods = useForm({
    defaultValues: {
      task: {
        value: "",
        label: "",
      },
      title: "",
      description: "",
      estimation: new Date().toISOString(),
      status: {
        value: "backlog",
        label: StatusOptions.Backlog,
      },
      priority: {
        value: "low",
        label: PriorityOptions.Low,
      },
      tags: [],
    },
    mode: "onBlur",
    resolver: yupResolver(newSubtaskValidationSchema),
  });

  return { methods };
};

export default useInitNewSubtaskForm;
