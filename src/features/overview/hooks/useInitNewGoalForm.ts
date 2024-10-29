import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { newGoalValidationSchema } from "../validation/newGoalValidationSchema";

const useInitNewGoalForm = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
    mode: "onBlur",
    resolver: yupResolver(newGoalValidationSchema),
  });

  return { methods };
};

export default useInitNewGoalForm;
