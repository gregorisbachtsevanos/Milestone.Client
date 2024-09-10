import { RegisterProps } from "@/app/services/types/identityTypes";

type FormFieldNames = keyof RegisterProps;

type FormFieldTypes = {
  name: FormFieldNames;
  label: string;
  type: string;
  size?: string;
}[];

export const formFieldsIsRow: FormFieldTypes = [
  { name: "firstname", label: "First Name", type: "text", size: "small" },
  { name: "lastname", label: "Last Name", type: "text", size: "small" },
];

export const formFieldsIsColumn: FormFieldTypes = [
  { name: "username", label: "User Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];

export const ONLY_LETTER_REGEXP = /^[A-Za-z]{3,}$/;
export const USERNAME_REGEXP = /^[A-Za-z0-9_]{6,}$/; // letters, numbers, underscores at 6 char long

export const EMAIL_REGEXP =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export const PASSWORD_REGEXP =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
