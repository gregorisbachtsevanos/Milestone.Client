import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";
import BottomBar from "@/features/bottomBar";
import TopBar from "@/features/topBar";

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
