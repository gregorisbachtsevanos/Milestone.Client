import * as yup from "yup";

export const newProjectValidationSchema = yup.object().shape({
  name: yup.string().required("Task title is required"),
  description: yup.string().optional(),
  deadline: yup.string().required("Provide deadline"),
  status: yup
    .object()
    .shape({
      value: yup.string().required("Please provide status"),
      label: yup.string().required("Status label is required"),
    })
    .required("Please provide status"),
  priority: yup
    .object()
    .shape({
      value: yup.string().required("Please provide priority"),
      label: yup.string().required("Priority label is required"),
    })
    .required("Please provide priority"),
  tags: yup.array().optional(),
});
