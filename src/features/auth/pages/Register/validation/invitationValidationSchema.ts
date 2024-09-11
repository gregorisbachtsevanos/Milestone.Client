import { EMAIL_REGEXP } from "@/features/auth/constants";
import * as yup from "yup";

export const invitationValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(EMAIL_REGEXP, "Please enter a valid email address")
    .required("Please enter your email"),
});
