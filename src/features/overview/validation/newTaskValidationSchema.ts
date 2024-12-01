import * as yup from "yup";

export const newTaskValidationSchema = yup.object().shape({
  project: yup
    .object()
    .shape({
      value: yup.string().required("Please select a project to associate"),
      label: yup.string().required("Please select a project to associate"),
    })
    .required("Please associate the task to a project"),
  title: yup.string().required("Task title is required"),
  description: yup.string().optional(),
  estimation: yup.string().required("Estimation is required"),
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
