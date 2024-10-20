import Button from "@/common/components/Button";
import { forwardRef, useCallback, useState } from "react";
import { StyledProfileController } from "./Profile.styled";
import Language from "./components/Language";
import Settings from "./components/Settings";
import Theme from "./components/Theme";
import UserInfo from "./components/UserInfo";
import { ModalType } from "./types";

const Profile = forwardRef<HTMLDivElement>((_, ref) => {
  const [modal, setModal] = useState<ModalType>(null);

  const handleOpenModal = useCallback(
    (modalType: Exclude<ModalType, null>) => setModal(modalType),
    []
  );

  const handleClose = useCallback(() => setModal(null), []);

  return (
    <StyledProfileController ref={ref}>
      <div className="mask">
        <UserInfo />
        <Theme />
        <Language />
        <Settings modal={modal} handleClose={handleClose} handleOpenModal={handleOpenModal} />
        <Button variant="danger-outline">Logout</Button>
        <Button variant="danger">Delete Account</Button>
      </div>
    </StyledProfileController>
  );
});

export default Profile;
