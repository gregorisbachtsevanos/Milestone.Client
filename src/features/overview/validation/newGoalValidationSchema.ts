import * as yup from "yup";

export const newGoalValidationSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
  description: yup.string().optional(),
  emailNotification: yup.boolean(),
  tags: yup.array().optional(),
});
