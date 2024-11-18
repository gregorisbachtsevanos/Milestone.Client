import Modal from "@/common/components/Modal/Modal";
import Tab from "@/common/components/Tab";
import { FC } from "react";
import { StyledAddNewOptionsContainer } from "./AddNewOptions.styled";
import { ModalType } from "@/features/overview/types";

interface AddNewOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: ModalType) => void;
}

const AddNewOptions: FC<AddNewOptionsProps> = ({ isOpen, onClose, onSelect }) => {
  return (
    <Modal width="800px" isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledAddNewOptionsContainer>
        <Tab title="Project" icon="project" onClick={() => onSelect("project")} />
        <Tab title="Task" icon="task" onClick={() => onSelect("task")} />
        <Tab title="Subtask" icon="subtask" onClick={() => onSelect("subtask")} />
      </StyledAddNewOptionsContainer>
    </Modal>
  );
};

export default AddNewOptions;
