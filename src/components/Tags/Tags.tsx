import React, { FC } from "react";
import {
  StyledDangerTag,
  StyledDarkTag,
  StyledDefaultTag,
  StyledInfoTag,
  StyledLightTag,
  StyledPrimaryTag,
  StyledSecondaryTag,
  StyledSuccessTag,
  StyledWarningTag,
} from "./Tags.styled";
import { VariantType } from "@/types";

interface TagsProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  color?: "white" | "yellow" | "black" | "green";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  variant?: VariantType;
  pointer?: boolean;
}

const Tags: FC<TagsProps> = (props) => {
  const { color, size, variant, pointer, icon, children } = props;

  const allClassNames = [size, color, pointer && "pointer", icon && "with-icon"]
    .filter(Boolean)
    .join(" ");

  if (variant === "danger")
    return <StyledDangerTag className={allClassNames}>{children}</StyledDangerTag>;

  if (variant === "warning")
    return <StyledWarningTag className={allClassNames}>{children}</StyledWarningTag>;

  if (variant === "success")
    return <StyledSuccessTag className={allClassNames}>{children}</StyledSuccessTag>;

  if (variant === "dark")
    return <StyledDarkTag className={allClassNames}>{children}</StyledDarkTag>;

  if (variant === "primary")
    return (
      <StyledPrimaryTag className={allClassNames}>
        {icon && icon}
        {children}
      </StyledPrimaryTag>
    );

  if (variant === "secondary")
    return <StyledSecondaryTag className={allClassNames}>{children}</StyledSecondaryTag>;

  if (variant === "info")
    return <StyledInfoTag className={allClassNames}>{children}</StyledInfoTag>;

  if (variant === "light")
    return <StyledLightTag className={allClassNames}>{children}</StyledLightTag>;

  return <StyledDefaultTag className={allClassNames}>{children}</StyledDefaultTag>;
};

export default Tags;
