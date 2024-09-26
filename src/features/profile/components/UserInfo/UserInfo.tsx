import Icon from "@/components/Icon";
import Card from "../Card";
import { StyledUserInfoContainer } from "./UserInfo.styled";
import { Caption, Text } from "@/theme";

const UserInfo = () => {
  return (
    <Card>
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
        <div className="logout">
          <Icon name="logout" />
        </div>
      </StyledUserInfoContainer>
    </Card>
  );
};

export default UserInfo;
