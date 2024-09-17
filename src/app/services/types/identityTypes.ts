export interface MachineTokenResponse {
  machineToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  tokenType: string;
}

export interface RegisterProps {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  invitation: string;
}

export interface LoginProps {
  username?: string;
  password?: string;
}

export interface RefreshProps {
  refreshToken: string;
}

export interface LogoutProps extends RefreshProps {}

export interface DecodedToken {
  role: string;
}
