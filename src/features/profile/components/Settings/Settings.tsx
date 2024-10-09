import { FC } from "react";
import ChangePassword from "./components/UpdatePassword";
import ChangeUserInfo from "./components/UpdateUserInfo";
import Edit from "./components/Edit";
import Subscription from "./components/Subscription/Subscription";
import { ModalType } from "../../types";
import { StyledSettingsContainer } from "./Settings.styled";

interface SettingsProps {
  modal: ModalType;
  handleClose: () => void;
  handleOpenModal: (value: Exclude<ModalType, null>) => void;
}

const Settings: FC<SettingsProps> = ({ modal, handleClose, handleOpenModal }) => {
  return (
    <StyledSettingsContainer>
      <Edit title="Edit Profile" onClick={() => handleOpenModal("profile")} />
      <Edit title="Change Password" onClick={() => handleOpenModal("password")} />
      <Edit title="My Subscription" onClick={() => handleOpenModal("subscription")} />
      <ChangeUserInfo isOpen={modal === "profile"} handleModal={handleClose} />
      <ChangePassword isOpen={modal === "password"} handleModal={handleClose} />
      <Subscription isOpen={modal === "subscription"} handleModal={handleClose} />
    </StyledSettingsContainer>
  );
};

export default Settings;
