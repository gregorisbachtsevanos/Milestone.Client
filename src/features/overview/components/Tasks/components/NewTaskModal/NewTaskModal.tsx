import Modal from "@/common/components/Modal/Modal";
import { StyledNewTaskModalContainer } from "./NewTaskModal.styled";
import { FC, useCallback } from "react";
import useInitNewTaskForm from "../../hooks/useInitNewTaskForm";
import { Controller, FieldValues } from "react-hook-form";
import Input from "@/common/components/Input";
import Button from "@/common/components/Button";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewTaskModal: FC<NewTaskModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewTaskForm();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitNewTask = useCallback((data: FieldValues) => {
    console.log(data);
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledNewTaskModalContainer onSubmit={handleSubmit(submitNewTask)}>
        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Title"
              error={errors.title?.message}
              type="text"
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Description"
              error={errors.description?.message}
              type="text"
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <Controller
          control={control}
          name="status"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Status"
              error={errors.status?.message}
              type="text"
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <Controller
          control={control}
          name="priority"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Priority"
              error={errors.priority?.message}
              type="text"
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Tags"
              error={errors.tags?.message}
              type="text"
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <div className="submit-btn">
          <Button variant="primary" size="small" type="submit">
            Create
          </Button>
        </div>
      </StyledNewTaskModalContainer>
    </Modal>
  );
};

export default NewTaskModal;
