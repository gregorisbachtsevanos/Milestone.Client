import { notificationsData } from "@/data/notificationData";
import Header from "./components/Header";
import NotificationCard from "./components/NotificationCard";
import { StyledNotificationContainer } from "./Notification.styled";

const Notification = () => {
  return (
    <StyledNotificationContainer>
      <Header />
      {notificationsData.map(({ message, created_at, read }) => (
        <NotificationCard message={message} date={created_at} read={read} />
      ))}
    </StyledNotificationContainer>
  );
};

export default Notification;
