import { Outlet } from "react-router-dom";
import { StyledLoginLayout } from "./LoginLayout.styled";

const LoginLayout = () => {
  return (
    <StyledLoginLayout>
      <div className="top">
        <div className="title"></div>
      </div>
      <div className="bottom">
        <Outlet />
      </div>
    </StyledLoginLayout>
  );
};

export default LoginLayout;
