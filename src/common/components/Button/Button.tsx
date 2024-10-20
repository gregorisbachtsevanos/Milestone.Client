import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { StyledButton, StyledAnchor, StyledLink } from "./Button.styled";
import { LinkProps } from "react-router-dom";

type BaseProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "dark" | "ghost" | "link" | "danger" | "danger-outline";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
  };

type ButtonAsReactRouter = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as?: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsReactRouter;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const { variant, as, size, isLoading, disabled, children, className, rounded, ...rest } = props;

  const allClassNames = `${variant ? variant : ""} ${className ? className : ""} ${
    rounded ? "rounded" : ""
  } ${size ?? ""} ${disabled ? "disabled" : ""}`;

  if (as === "link") {
    const { to, ...linkRest } = rest as LinkProps;
    return (
      <StyledLink className={allClassNames} to={to} {...linkRest}>
        {children}
      </StyledLink>
    );
  }

  if (as === "a") {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <StyledAnchor
        className={allClassNames}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorRest}
      >
        {children}
      </StyledAnchor>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <StyledButton
      className={allClassNames}
      disabled={disabled || isLoading}
      type={type}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      {...buttonRest}
    >
      {isLoading ? <div className="loader">loader</div> : children}
    </StyledButton>
  );
};

export default React.forwardRef(Button);
