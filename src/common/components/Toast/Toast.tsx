import React, { ReactNode } from "react";
import { ToastContainerProps, toast as toastFunc } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { StyledToastContainer } from "./Toast.styled";
import Icons from "../Icon/Icons";
import { Text, Caption } from "../../../.config/theme";

const Toast: React.FC<ToastContainerProps> = ({
  theme,
  closeButton = true,
  position = "top-center",
  autoClose = 3000,
  ...props
}) => {
  return (
    <StyledToastContainer
      position={position}
      autoClose={autoClose}
      closeButton={closeButton}
      {...props}
    />
  );
};
export default Toast;

const { info, warn, success, error, loading, ...rest } = toastFunc;

export const toast = {
  default: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    toastFunc(
      <>
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),

  success: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    success(
      <>
        <Icons name="success" color="#265726" size={"30px"} />
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),

  error: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    error(
      <>
        <Icons name="error" color="red" size={"30px"} />
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),

  info: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    info(
      <>
        {/* <Icons name="error" color="red" size={"30px"} /> */}
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),

  warn: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    warn(
      <>
        {/* <Icons name="error" color="red" size={"30px"} /> */}
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),

  loading: (
    textToRender: string | ReactNode,
    description?: string | ReactNode,
    options?: ToastContainerProps
  ) =>
    loading(
      <>
        {/* <Icons name="error" color="red" size={"30px"} /> */}
        <Text>{textToRender}</Text>
        <Caption>{description}</Caption>
      </>,
      { ...options }
    ),
  ...rest,
};
