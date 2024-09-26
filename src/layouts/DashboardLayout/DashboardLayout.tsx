import BottomBar from "@/features/bottomBar";
import TopBar from "@/features/topBar";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";
import Notification from "@/features/notification";
import { isNotificationOpen } from "@/features/notification/notificationSlice";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { isProfileModalOpen } from "@/features/profile/profileSlice";

const DashboardLayout = () => {
  const notificationPopupRef = useRef<HTMLDivElement>(null);
  return (
    <StyledMainLayout>
      <TopBar notificationPopupRef={notificationPopupRef} />
      {useSelector(isNotificationOpen) && <Notification ref={notificationPopupRef} />}
      {useSelector(isProfileModalOpen) && <>s</>}
      <section>{<Outlet />}</section>
      <BottomBar />
    </StyledMainLayout>
  );
};

export default DashboardLayout;
