import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Toast from "../common/components/Toast";
import RoundedLines from "./DashboardLayout/components/RoundedLines";

const AppLayout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <RoundedLines />
      <Outlet />
      <Toast />
    </>
  );
};

export default AppLayout;
