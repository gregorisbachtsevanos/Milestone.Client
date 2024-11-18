import { PriorityOptions, StatusOptions } from "@/features/overview/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newProjectValidationSchema } from "../validation/newProjectValidationSchema";

const useInitNewProjectForm = () => {
  const methods = useForm({
    defaultValues: {
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
    resolver: yupResolver(newProjectValidationSchema),
  });

  return { methods };
};

export default useInitNewProjectForm;
