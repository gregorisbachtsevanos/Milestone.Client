import Modal from "@/common/components/Modal/Modal";
import { StyledNewEventModalContainer } from "./NewEventModal.styled";
import { FC } from "react";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewEventModal: FC<NewTaskModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledNewEventModalContainer>NewTaskModal</StyledNewEventModalContainer>
    </Modal>
  );
};

export default NewEventModal;
