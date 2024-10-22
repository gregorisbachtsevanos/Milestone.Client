import * as yup from "yup";

export const newTaskValidationSchema = yup.object().shape({
  title: yup.string().required("Task title is required"),
  description: yup.string(),
  status: yup.string().required("Please provide status"),
  priority: yup.string().required("Please provide priority"),
  tags: yup.array(),
});
