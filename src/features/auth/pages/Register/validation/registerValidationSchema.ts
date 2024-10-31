import {
  EMAIL_REGEXP,
  ONLY_LETTER_REGEXP,
  PASSWORD_REGEXP,
  USERNAME_REGEXP,
} from "@/features/auth/constants";
import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Firstname can not be empty.")
    .matches(ONLY_LETTER_REGEXP, "First name must contain only letters."),
  lastname: yup
    .string()
    .required("Lastname can not be empty")
    .matches(ONLY_LETTER_REGEXP, "Lastname must contain only letters."),
  username: yup
    .string()
    .matches(
      USERNAME_REGEXP,
      "Username must be 4+ characters, letters, numbers, or underscores only."
    )
    .required("Please define username"),
  email: yup
    .string()
    .matches(EMAIL_REGEXP, "Please enter a valid email address")
    .required("Please enter your email"),
  password: yup
    .string()
    .required("Please define a password")
    .matches(
      PASSWORD_REGEXP,
      "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Please define a password"),
  invitation: yup.string().required("Please enter a valid invitation code"),
});
