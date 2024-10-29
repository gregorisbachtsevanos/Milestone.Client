import Button from "@/common/components/Button";
import Input from "@/common/components/Input";
import Modal from "@/common/components/Modal/Modal";
import TagsInput from "@/common/components/TagsInput";
import Textarea from "@/common/components/Textarea";
import { FC, useCallback, useEffect } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { StyledNewGoalModalContainer } from "./NewGoalModal.styled";
import useInitNewGoalForm from "@/features/overview/hooks/useInitNewGoalForm";

interface NewGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NewGoalModal: FC<NewGoalModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewGoalForm();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  const submitNewGoal = useCallback((data: FieldValues) => {
    console.log(data);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewGoalModalContainer onSubmit={handleSubmit(submitNewGoal)}>
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
      </StyledNewGoalModalContainer>
    </Modal>
  );
};

export default NewGoalModal;
