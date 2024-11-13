import Icon from "@/common/components/Icon";
import Card from "../Card";
import { StyledUserInfoContainer } from "./UserInfo.styled";
import { Caption, Text } from "@/.config/theme";
import Tooltip from "@/common/components/Tooltip";
import { User } from "@/types";

const UserInfo = ({ user }: { user?: User }) => {
  const isEmailVerified = true;

  return (
    <Card withoutMargin>
      <StyledUserInfoContainer>
        <div className="user">
          <div className="image">
            <Icon name="user" color="black" />
          </div>
          <div className="info">
            <Text>{user?.name}</Text>
            <Caption className="username">{user?.email}</Caption>
          </div>
        </div>
        {isEmailVerified ? (
          <Tooltip position="left" tooltipText="Email Verified">
            <Icon name="verified" />
          </Tooltip>
        ) : (
          <Tooltip position="left" tooltipText="Email Verified Needed">
            <Icon name="danger" color="red" />
          </Tooltip>
        )}
      </StyledUserInfoContainer>
    </Card>
  );
};

export default UserInfo;
