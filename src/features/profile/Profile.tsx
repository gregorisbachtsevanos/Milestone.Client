import Button from "@/components/Button";
import { forwardRef, useCallback, useState } from "react";
import { StyledProfileController } from "./Profile.styled";
import Edit from "./components/Edit";
import Language from "./components/Language";
import Panel from "./components/Panel";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";
import ChangeUserInfo from "./components/ChangeUserInfo";

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
      <Panel title="Edit Profile" isOpen={modal === "password"} onClose={() => setModal(null)}>
        change your password
      </Panel>
      <Panel title="Edit Profile" isOpen={modal === "subscription"} onClose={() => setModal(null)}>
        subscription page
      </Panel>
    </StyledProfileController>
  );
});

export default Profile;
