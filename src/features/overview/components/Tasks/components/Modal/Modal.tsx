import { FC } from "react";
import NewProject from "../NewProject";
import NewSubtask from "../NewSubtask";
import NewTask from "../NewTask";
import { ModalType } from "@/features/overview/types";

interface ModalProps {
  isOpen: ModalType;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <NewProject isOpen={isOpen === "project"} onClose={onClose} />
      <NewTask isOpen={isOpen === "task"} onClose={onClose} />
      <NewSubtask isOpen={isOpen === "subtask"} onClose={onClose} />
    </>
  );
};

export default Modal;
