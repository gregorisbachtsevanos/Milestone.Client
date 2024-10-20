import { Caption, Text } from "@/.config/theme";
import { StyledNotificationCardContainer } from "./NotificationCard.styled";
import { timePassSince } from "@/common/utils/dates";
import { FC } from "react";

interface NotificationCardProps {
  message: string;
  date: string;
  read?: boolean;
}

const NotificationCard: FC<NotificationCardProps> = ({ message, date, read }) => {
  return (
    <StyledNotificationCardContainer className={read ? "" : "unread"}>
      <Text>{message}</Text>
      <Caption>{timePassSince(new Date(date))}</Caption>
    </StyledNotificationCardContainer>
  );
};

export default NotificationCard;
