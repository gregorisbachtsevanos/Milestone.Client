import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import Label from "@/common/components/Label";
import Modal from "@/common/components/Modal/Modal";
import Switch from "@/common/components/Switch";
import TagsInput from "@/common/components/TagsInput";
import Textarea from "@/common/components/Textarea";
import useInitNewGoalForm from "@/features/overview/hooks/useInitNewTaskForm copy 2";
import { FC, useCallback } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { StyledNewEventModalContainer } from "./NewEventModal.styled";

interface NewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewEventModal: FC<NewEventModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewGoalForm();

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
      <StyledNewEventModalContainer onSubmit={handleSubmit(submitNewTask)}>
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
          name="emailNotification"
          control={control}
          render={({ field: { onChange } }) => (
            <Label infoText="Email Notification: ">
              <Switch onChange={onChange} />
            </Label>
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
      </StyledNewEventModalContainer>
    </Modal>
  );
};

export default NewEventModal;
