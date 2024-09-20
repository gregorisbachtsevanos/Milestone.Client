import { Badge } from "@/theme";
import styled from "styled-components";

const StyledTagContainer = styled(Badge)`
  padding: 10px 15px;
  border-radius: 50px;
  color: ${({ theme }) => theme.palette.gray[500]};
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
  background-color: #31944b;
`;

export const StyledWarningTag = styled(StyledTagContainer)`
  padding: 7px 12px;

  background-color: ${({ theme }) => theme.palette.yellow[500]};
  color: ${({ theme }) => theme.palette.black[500]};
`;

export const StyledDangerTag = styled(StyledTagContainer)`
  padding: 7px 12px;

  background-color: ${({ theme }) => theme.palette.red[500]};
`;

export const StyledPrimaryTag = styled(StyledTagContainer)``;

export const StyledSecondaryTag = styled(StyledTagContainer)``;

export const StyledInfoTag = styled(StyledTagContainer)``;

export const StyledLightTag = styled(StyledTagContainer)`
  background-color: ${({ theme }) => theme.palette.gray[500]};
`;
