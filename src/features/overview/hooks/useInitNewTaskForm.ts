import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newTaskValidationSchema } from "../validation/newTaskValidationSchema";
import { PriorityOptions, StatusOptions } from "../types";

const useInitNewTaskForm = () => {
  const methods = useForm({
    defaultValues: {
      projectName: {
        value: "",
        label: "",
      },
      name: "",
      description: "",
      deadline: new Date().toISOString(),
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
    resolver: yupResolver(newTaskValidationSchema),
  });

  return { methods };
};

export default useInitNewTaskForm;
