import { EMAIL_REGEXP, ONLY_LETTER_REGEXP, USERNAME_REGEXP } from "@/features/auth/constants";
import * as yup from "yup";

export const editProfileValidationSchema = yup.object().shape({
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
    .matches(
      USERNAME_REGEXP,
      "Username must be at least 4 characters long, contain only letters, numbers, and underscores"
    )
    .required("Please define username"),
  email: yup
    .string()
    .matches(EMAIL_REGEXP, "Please enter a valid email address")
    .required("Please enter your email"),
});
