import { Badge } from "@/.config/theme";
import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import Modal from "@/common/components/Modal/Modal";
import Select from "@/common/components/Select";
import { priorityOptions, statusOptions } from "@/features/overview/constant";
import { FC, useCallback } from "react";
import { Controller, FieldValues } from "react-hook-form";
import useInitNewTaskForm from "../../../../hooks/useInitNewTaskForm";
import { StyledNewTaskModalContainer } from "./NewTaskModal.styled";
import Textarea from "@/common/components/Textarea";
import TagsInput from "@/common/components/TagsInput";

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
            <Textarea
              label="Description"
              error={errors.description?.message}
              value={value}
              onChange={onChange}
              variant="gray"
            />
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <div className="selection">
              <Select
                label="Status"
                styleType="column"
                variant="gray"
                options={statusOptions}
                value={value}
                onChange={(selectedValue) => onChange(selectedValue)}
                ref={ref}
              />
              <Badge className="info-text">
                * Select the current status of the task (e.g., To Do, In Progress, Done).
              </Badge>
            </div>
          )}
        />
        <Controller
          name="priority"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <div className="selection">
              <Select
                label="Priority"
                styleType="column"
                variant="gray"
                options={priorityOptions}
                value={value}
                onChange={(selectedValue) => onChange(selectedValue)}
                ref={ref}
              />
              <Badge className="info-text">
                * Choose the task's priority level (e.g., Low, Medium, High).
              </Badge>
            </div>
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field: { value, onChange } }) => (
            <TagsInput value={value || []} onChange={(newTags) => onChange(newTags)} />
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
