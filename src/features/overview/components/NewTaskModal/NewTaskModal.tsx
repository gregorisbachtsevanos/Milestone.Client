import Modal from "@/common/components/Modal/Modal";
import { StyledNewTaskModalContainer } from "./NewTaskModal.styled";
import { FC } from "react";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewTaskModal: FC<NewTaskModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledNewTaskModalContainer>NewTaskModal</StyledNewTaskModalContainer>;
    </Modal>
  );
};

export default NewTaskModal;
