import { notificationsData } from "@/data/notificationData";
import Notes from "../overview/components/Notes";
import { StyledNotificationContainer } from "./Notification.styled";
import { NotificationType } from "@/types";
import Header from "./components/Header";
import NotificationCard from "./components/NotificationCard";

const Notification = () => {
  return (
    <StyledNotificationContainer>
      <Header />
      {notificationsData.map(({ message, created_at, read }) => (
        <NotificationCard message={message} date={created_at} read={read} />
      ))}

      {/* <Notes data={notificationsData as NotificationType[]} size="small" as={"notification"} /> */}
    </StyledNotificationContainer>
  );
};

export default Notification;
