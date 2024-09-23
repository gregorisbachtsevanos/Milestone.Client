import { notificationsData } from "@/data/notificationData";
import Header from "./components/Header";
import NotificationCard from "./components/NotificationCard";
import { StyledNotificationContainer } from "./Notification.styled";
import { forwardRef } from "react";

const Notification = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledNotificationContainer ref={ref}>
      <Header />
      {notificationsData.map(({ message, created_at, read }) => (
        <NotificationCard message={message} date={created_at} read={read} />
      ))}
    </StyledNotificationContainer>
  );
});

export default Notification;
