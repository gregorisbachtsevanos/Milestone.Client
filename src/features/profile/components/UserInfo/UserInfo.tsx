import Icon from "@/components/Icon";
import Card from "../Card";
import { StyledUserInfoContainer } from "./UserInfo.styled";
import { Caption, Text } from "@/theme";

const UserInfo = () => {
  const isEmailVerified = true;

  return (
    <Card withoutMargin>
      <StyledUserInfoContainer>
        <div className="user">
          <div className="image">
            <Icon name="user" color="black" />
          </div>
          <div className="info">
            <Text>Gregoris Bachtsevanos</Text>
            <Caption className="username">gregorisbachtsevanos@gmail.com</Caption>
          </div>
        </div>
        {isEmailVerified ? <Icon name="verified" /> : <Icon name="danger" color="red" />}
      </StyledUserInfoContainer>
    </Card>
  );
};

export default UserInfo;
