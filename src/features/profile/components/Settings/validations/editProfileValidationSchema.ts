import { EMAIL_REGEXP, ONLY_LETTER_REGEXP, USERNAME_REGEXP } from "@/features/auth/constants";
import { MAX_FILE_SIZE, validFileExtensions } from "@/features/profile/constant";
import * as yup from "yup";

function isValidFileType(fileName: string | undefined, fileType: string): boolean {
  return !!fileName && validFileExtensions[fileType]?.includes(fileName.split(".").pop() || "");
}

export const editProfileValidationSchema = yup.object().shape({
  image: yup
    .mixed<File>()
    .required("Required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value?.name.toLowerCase(), "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 100KB",
      (value) => !!value && value.size <= MAX_FILE_SIZE
    ),
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
