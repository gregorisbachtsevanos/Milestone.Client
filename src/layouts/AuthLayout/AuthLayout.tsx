import Lines from "@/layouts/AuthLayout/components/Lines";
import { Outlet } from "react-router-dom";
import { StyledAuthLayout } from "./AuthLayout.styled";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AuthLayout = () => {
  return (
    <StyledAuthLayout>
      <div className="auth-container">
        <Header />
        <Footer />
      </div>
      <Lines />
      <div className="auth-form">
        <Outlet />
      </div>
    </StyledAuthLayout>
  );
};

export default AuthLayout;
