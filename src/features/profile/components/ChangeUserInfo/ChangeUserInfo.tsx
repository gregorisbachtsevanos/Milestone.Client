import { FC } from "react";
import Panel from "../Panel";

interface ChangeUserInfoProps {
  isOpen: boolean;
  handleModal: () => void;
}

const ChangeUserInfo: FC<ChangeUserInfoProps> = ({ isOpen, handleModal }) => {
  return (
    <Panel title="Edit Profile" isOpen={isOpen} onClose={handleModal}>
      Edit your profile
    </Panel>
  );
};

export default ChangeUserInfo;
