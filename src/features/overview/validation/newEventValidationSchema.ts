import * as yup from "yup";

export const newEventValidationSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
  description: yup.string().optional(),
  date: yup.string().required("Provide datetime"),
  emailNotification: yup.boolean(),
  tags: yup.array().optional(),
});
