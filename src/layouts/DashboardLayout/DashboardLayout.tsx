import BottomBar from "@/features/bottomBar";
import TopBar from "@/features/topBar";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./DashboardLayout.styled";
import Notification from "@/features/notification";
import { isNotificationOpen } from "@/features/notification/notificationSlice";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { isProfileModalOpen } from "@/features/profile/profileSlice";
import Profile from "@/features/profile";
import { isLoaderOpen } from "@/app/slice";
import Loader from "@/common/components/Loader";

const DashboardLayout = () => {
  const notificationPopupRef = useRef<HTMLDivElement>(null);
  const profilePopupRef = useRef<HTMLDivElement>(null);

  return (
    <StyledMainLayout>
      <TopBar notificationPopupRef={notificationPopupRef} profilePopupRef={profilePopupRef} />
      {useSelector(isNotificationOpen) && <Notification ref={notificationPopupRef} />}
      {useSelector(isProfileModalOpen) && <Profile ref={profilePopupRef} />}
      <section>{<Outlet />}</section>
      {useSelector(isLoaderOpen) && <Loader />}
      <BottomBar />
    </StyledMainLayout>
  );
};

export default DashboardLayout;
