import React, { ReactNode, useCallback } from "react";
import useAuth from "../../hooks/useAuth";
import { StyledLogoutButton } from "./LogoutButton.styled";

interface LogoutButtonProps {
  icon?: ReactNode;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ icon }) => {
  const { logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout.request();
  }, [logout]);

  return (
    <StyledLogoutButton
      // size="small"
      // styleType="secondary"
      disabled={logout.isLoading}
      onClick={handleLogout}
    >
      Logout {icon}
    </StyledLogoutButton>
  );
};
export default LogoutButton;
