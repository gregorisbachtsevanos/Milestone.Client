import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username cannot be empty").min(4, "Username is not correct"),
  password: yup.string().required("Please define a password").required("Password cannot be empty"),
});
