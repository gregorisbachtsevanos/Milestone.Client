import { ErrorResponse } from "@/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { toast } from "../components/Toast/Toast";
export const getFetchQueryErrorMessage = (error: unknown) =>
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.message ??
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.title;

export const getFetchQueryErrorCode = (error: unknown) =>
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.code;

export const showToastWithCatchError = (error: unknown, fallbackMessage?: string) => {
  if (fallbackMessage) return toast.error(fallbackMessage);

  const errorMessage = getFetchQueryErrorMessage(error);
  console.log(errorMessage);
  toast.error(error ?? "Unknown error");
};
