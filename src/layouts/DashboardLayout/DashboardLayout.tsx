import BottomBar from "@/features/bottomBar";
import TopBar from "@/features/topBar";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";
import Notification from "@/features/notification";
import { isNotificationOpen } from "@/features/notification/notificationSlice";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  return (
    <StyledMainLayout>
      <TopBar />
      {useSelector(isNotificationOpen) && <Notification />}
      <section>{<Outlet />}</section>
      <BottomBar />
    </StyledMainLayout>
  );
};

export default DashboardLayout;
