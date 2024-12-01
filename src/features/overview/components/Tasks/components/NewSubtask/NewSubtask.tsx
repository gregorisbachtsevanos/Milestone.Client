import { Badge } from "@/.config/theme";
import {
  useCreateNewTaskMutation,
  useGetAllTasksOverviewQuery,
} from "@/app/services/projectManagerApi";
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
import { FC, memo, useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import { StyledNewSubtaskContainer } from "./NewSubtask.styled";

interface NewSubtaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewSubtask: FC<NewSubtaskModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewSubtaskForm();
  const [estimation, setEstimation] = useState(new Date());

  const { data: tasks } = useGetAllTasksOverviewQuery(undefined, {
    skip: !isOpen,
  });

  const [
    createNewSubtask,
    // { reset: resetNewProjectState, isLoading: isNewProjectLoading, isSuccess: isNewProjectSuccess },
  ] = useCreateNewTaskMutation();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  const submitNewTask = useCallback(
    (data: any) => {
      const x = {
        project_id: data.project.value,
        title: data.title,
        description: data.description,
        estimation: data.deadline ?? estimation,
        status: data.status.value,
        priority: data.priority.value,
        tags: data.tags.map((tag: { label: string }) => tag.label || tag),
      };

      createNewSubtask(x);

      setTimeout(() => {
        onClose();
        reset();
      }, 4500);
    },
    [createNewSubtask, estimation, onClose, reset]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewSubtaskContainer onSubmit={handleSubmit(submitNewTask)}>
        <Controller
          name="task"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <div className="selection">
              <Select
                label="Project Name"
                styleType="column"
                variant="gray"
                placeholder="Select Project"
                options={tasks}
                value={value}
                onChange={(selectedValue) => onChange(selectedValue)}
                ref={ref}
                error={errors.task?.value?.message}
              />
            </div>
          )}
        />
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
          name="estimation"
          render={({ field: { value, onChange } }) => (
            <div className="datepicker">
              <Label>Effort estimation</Label>
              <Datepicker
                dateFormat="yyyy/MM/dd"
                selected={new Date(value)}
                onChange={(date) => {
                  setEstimation(date as Date);
                  onChange(date?.toISOString());
                }}
                minDate={new Date()}
                error={errors.estimation?.message}
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

export default memo(NewSubtask);
