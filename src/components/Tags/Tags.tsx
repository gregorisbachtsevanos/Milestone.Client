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
  color?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  variant?: VariantType;
}

const Tags: FC<TagsProps> = (props) => {
  const { variant, children } = props;

  if (variant === "danger") return <StyledDangerTag>{children}</StyledDangerTag>;

  if (variant === "warning") return <StyledWarningTag>{children}</StyledWarningTag>;

  if (variant === "success") return <StyledSuccessTag>{children}</StyledSuccessTag>;

  if (variant === "dark") return <StyledDarkTag>{children}</StyledDarkTag>;

  if (variant === "primary") return <StyledPrimaryTag>{children}</StyledPrimaryTag>;

  if (variant === "secondary") return <StyledSecondaryTag>{children}</StyledSecondaryTag>;

  if (variant === "info") return <StyledInfoTag>{children}</StyledInfoTag>;

  if (variant === "light") return <StyledLightTag>{children}</StyledLightTag>;

  return <StyledDefaultTag>{children}</StyledDefaultTag>;
};

export default Tags;
