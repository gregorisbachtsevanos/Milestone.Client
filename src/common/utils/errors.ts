import { ErrorResponse } from "@/types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const getFetchQueryErrorMessage = (error: unknown) =>
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.message ??
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.title;

export const getFetchQueryErrorCode = (error: unknown) =>
  ((error as FetchBaseQueryError)?.data as ErrorResponse)?.code;

export const showToastWithCatchError = (error: unknown, fallbackMessage?: string) => {
  if (fallbackMessage) return "toast.error(fallbackMessage)";

  const queryError = (error as { error: string }).error;
  if (queryError) {
    const errorMessage = getFetchQueryErrorMessage(queryError);
    // toast.error(errorMessage ?? "Unknown error");
  }
};
