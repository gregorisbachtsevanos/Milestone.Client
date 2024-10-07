import { FC } from "react";
import Panel from "../Panel";

interface ChangePasswordProps {
  isOpen: boolean;
  handleModal: () => void;
}

const ChangePassword: FC<ChangePasswordProps> = ({ isOpen, handleModal }) => {
  return (
    <Panel title="Change Password" isOpen={isOpen} onClose={handleModal}>
      Change your password
    </Panel>
  );
};

export default ChangePassword;
