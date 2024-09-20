import BottomBar from "@/features/bottomBar";
import TopBar from "@/features/topBar";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";

const DashboardLayout = () => {
  return (
    <StyledMainLayout>
      <TopBar />
      <section>{<Outlet />}</section>
      <BottomBar />
    </StyledMainLayout>
  );
};

export default DashboardLayout;
