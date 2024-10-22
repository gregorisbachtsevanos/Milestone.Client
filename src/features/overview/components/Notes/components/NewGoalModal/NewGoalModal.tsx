import Modal from "@/common/components/Modal/Modal";
import { StyledNewGoalModalContainer } from "./NewGoalModal.styled";
import { FC } from "react";

interface NewGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewGoalModal: FC<NewGoalModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledNewGoalModalContainer>NewGoalModal</StyledNewGoalModalContainer>
    </Modal>
  );
};

export default NewGoalModal;
