import * as yup from "yup";

export const newProjectValidationSchema = yup.object().shape({
  name: yup.string().required("Project name is required"),
  description: yup.string().optional(),
  deadline: yup.string().required("Provide deadline"),
  tags: yup.array().optional(),
});
