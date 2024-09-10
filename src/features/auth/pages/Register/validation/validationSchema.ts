import {
  EMAIL_REGEXP,
  ONLY_LETTER_REGEXP,
  PASSWORD_REGEXP,
  USERNAME_REGEXP,
} from "@/features/auth/constants";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(ONLY_LETTER_REGEXP, "Firstname can only contain letters")
    .required("Please enter your firstname"),
  lastname: yup
    .string()
    .matches(ONLY_LETTER_REGEXP, "Lastname can only contain letters")
    .required("Please enter your lastname"),
  username: yup
    .string()
    .matches(USERNAME_REGEXP, "Username can only contain letters, numbers, and underscores")
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
});
