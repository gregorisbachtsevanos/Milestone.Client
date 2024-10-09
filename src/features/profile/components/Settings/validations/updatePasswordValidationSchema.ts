import { PASSWORD_REGEXP } from "@/features/auth/constants";
import * as yup from "yup";

export const updatePasswordValidationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Please define a password")
    .matches(
      PASSWORD_REGEXP,
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please define a password"),
  newPassword: yup
    .string()
    .required("Please define a password")
    .matches(
      PASSWORD_REGEXP,
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please define a password"),
  confirmNewPassword: yup
    .string()
    .required("Please define a password")
    .matches(
      PASSWORD_REGEXP,
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please define a password"),
});
