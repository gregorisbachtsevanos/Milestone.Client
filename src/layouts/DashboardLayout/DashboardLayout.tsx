import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";
import BottomBar from "@/features/bottomBar";

const DashboardLayout = () => {
  return (
    <StyledMainLayout>
      <section>{<Outlet />}</section>
      <BottomBar />
    </StyledMainLayout>
  );
};

export default DashboardLayout;
