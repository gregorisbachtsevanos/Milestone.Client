import { Badge } from "@/.config/theme";
import { useCreateNewProjectMutation } from "@/app/services/projectManagerApi";
import Button from "@/common/components/Button";
import Datepicker from "@/common/components/Datepicker";
import Input from "@/common/components/Input";
import Label from "@/common/components/Label";
import Modal from "@/common/components/Modal/Modal";
import Select from "@/common/components/Select";
import TagsInput from "@/common/components/TagsInput";
import Textarea from "@/common/components/Textarea";
import { priorityOptions, statusOptions } from "@/features/overview/constant";
import useInitNewSubtaskForm from "@/features/overview/hooks/useInitNewSubtaskForm";
import { ProjectProps } from "@/types";
import { FC, useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StyledNewSubtaskContainer } from "./NewSubtask.styled";

interface NewSubtaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewSubtask: FC<NewSubtaskModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewSubtaskForm();
  const dispatch = useDispatch();
  const [deadline, setDeadline] = useState(new Date());

  const [
    createNewProject,
    // { reset: resetNewProjectState, isLoading: isNewProjectLoading, isSuccess: isNewProjectSuccess },
  ] = useCreateNewProjectMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitNewProject = useCallback(
    (data: ProjectProps) => {
      console.log(data);
      createNewProject(data);
      // dispatch(setLoaderIsOpen(true));
    },
    [createNewProject, dispatch]
  );
  console.log(errors);
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewSubtaskContainer onSubmit={handleSubmit(submitNewProject)}>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <Input
              label="Name"
              error={errors.name?.message}
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
          name="deadline"
          render={({ field: { value, onChange } }) => (
            <div className="datepicker">
              <Label>Deadline</Label>
              <Datepicker
                dateFormat="yyyy/MM/dd"
                selected={new Date(value)}
                onChange={(date) => {
                  setDeadline(date as Date);
                  onChange(date?.toISOString());
                }}
                minDate={new Date()}
                error={errors.deadline?.message}
              />
            </div>
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
      </StyledNewSubtaskContainer>
    </Modal>
  );
};

export default NewSubtask;
