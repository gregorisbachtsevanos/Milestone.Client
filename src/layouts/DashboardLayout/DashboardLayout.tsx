import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";

const DashboardLayout = () => {
  return (
    <StyledMainLayout>
      <section>{<Outlet />}</section>
    </StyledMainLayout>
  );
};

export default DashboardLayout;
