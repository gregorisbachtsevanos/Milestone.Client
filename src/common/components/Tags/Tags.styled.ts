import { Badge } from "@/.config/theme";
import styled from "styled-components";

const StyledTagContainer = styled(Badge)`
  padding: 10px 15px;
  border-radius: 50px;
  color: ${({ theme }) => theme.palette.gray[500]};
  display: flex;
  align-items: center;

  &.pointer {
    cursor: pointer;
  }

  &.with-icon {
    padding: 2px 6px;
    display: flex;
    gap: 5px;
    cursor: pointer;
  }

  &.small {
    padding: 4px 10px;
  }

  &.yellow {
    color: ${({ theme }) => theme.palette.yellow[500]};
  }
`;

export const StyledDefaultTag = styled(StyledTagContainer)`
  background-color: ${({ theme }) => theme.palette.green[700]};
  color: ${({ theme }) => theme.palette.yellow[500]};
`;

export const StyledDarkTag = styled(StyledTagContainer)`
  background-color: ${({ theme }) => theme.palette.black[500]};
`;

export const StyledSuccessTag = styled(StyledTagContainer)`
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.palette.green[50]};
`;

export const StyledWarningTag = styled(StyledTagContainer)`
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.palette.yellow[50]};
  color: ${({ theme }) => theme.palette.black[500]};
`;

export const StyledDangerTag = styled(StyledTagContainer)`
  padding: 7px 12px;
  background-color: ${({ theme }) => theme.palette.red[50]};
`;

export const StyledPrimaryTag = styled(StyledTagContainer)`
  background-color: ${({ theme }) => theme.palette.yellow[500]};
  color: ${({ theme }) => theme.palette.black[500]};
`;

export const StyledSecondaryTag = styled(StyledTagContainer)``;

export const StyledInfoTag = styled(StyledTagContainer)``;

export const StyledLightTag = styled(StyledTagContainer)`
  background-color: ${({ theme }) => theme.palette.gray[500]};
`;
