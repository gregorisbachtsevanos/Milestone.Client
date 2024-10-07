import Button from "@/components/Button";
import { forwardRef, useCallback, useState } from "react";
import { StyledProfileController } from "./Profile.styled";
import ChangePassword from "./components/ChangePassword";
import ChangeUserInfo from "./components/ChangeUserInfo";
import Edit from "./components/Edit";
import Language from "./components/Language";
import Subscription from "./components/Subscription/Subscription";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  const [modal, setModal] = useState<"profile" | "password" | "subscription" | null>(null);

  const handleEditClick = useCallback((modalType: "profile" | "password" | "subscription") => {
    setModal(modalType);
  }, []);

  const handleClose = useCallback(() => setModal(null), []);

  return (
    <StyledProfileController ref={ref}>
      <UserInfo />
      <Theme />
      <Language />
      <Edit title="Edit Profile" onClick={() => handleEditClick("profile")} />
      <Edit title="Change Password" onClick={() => handleEditClick("password")} />
      <Edit title="My Subscription" onClick={() => handleEditClick("subscription")} />
      <Button variant="danger-outline">Logout</Button>
      <Button variant="danger">Delete Account</Button>
      <ChangeUserInfo isOpen={modal === "profile"} handleModal={handleClose} />
      <ChangePassword isOpen={modal === "password"} handleModal={handleClose} />
      <Subscription isOpen={modal === "subscription"} handleModal={handleClose} />
    </StyledProfileController>
  );
});

export default Profile;
