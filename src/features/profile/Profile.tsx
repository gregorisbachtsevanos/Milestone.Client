import { Text } from "@/.config/theme";
import Button from "@/common/components/Button";
import { timePassSince } from "@/common/utils/dates";
import { forwardRef, useCallback, useState } from "react";
import useAuth from "../auth/hooks/useAuth";
import { StyledProfileController } from "./Profile.styled";
import Card from "./components/Card";
import Language from "./components/Language";
import Settings from "./components/Settings";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";
import { ModalType } from "./types";
import { useSelector } from "react-redux";
import { selectUserId } from "../auth/authSlice";
import { useGetCurrentUserQuery } from "@/app/services/userApi";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  const [modal, setModal] = useState<ModalType>(null);
  const getUserId = useSelector(selectUserId);

  const { data: user } = useGetCurrentUserQuery({ user_id: getUserId ?? "" }, { skip: !getUserId });

  const handleOpenModal = useCallback(
    (modalType: Exclude<ModalType, null>) => setModal(modalType),
    []
  );

  const handleClose = useCallback(() => setModal(null), []);

  const { logout } = useAuth();
  const handleLogout = useCallback(() => {
    logout.request();
  }, [logout]);
  console.log(user);
  return (
    <StyledProfileController ref={ref}>
      <div className="mask">
        <UserInfo user={user} />
        <Card size="small">
          <div className="last-activity">
            <Text>Last Activity:</Text>
            <Text>{timePassSince(new Date("2024-11-10T12:00:00"))}</Text>
          </div>
        </Card>
        <Theme />
        <Language />
        <Settings modal={modal} handleClose={handleClose} handleOpenModal={handleOpenModal} />
        <Button variant="danger-outline" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="danger">Delete Account</Button>
      </div>
    </StyledProfileController>
  );
});

export default Profile;
