import { Badge } from "@/.config/theme";
import { useCreateNewTaskMutation, useGetAllProjectsQuery } from "@/app/services/projectManagerApi";
import Button from "@/common/components/Button";
import Datepicker from "@/common/components/Datepicker";
import Input from "@/common/components/Input";
import Label from "@/common/components/Label";
import Modal from "@/common/components/Modal/Modal";
import Select from "@/common/components/Select";
import TagsInput from "@/common/components/TagsInput";
import Textarea from "@/common/components/Textarea";
import { priorityOptions, statusOptions } from "@/features/overview/constant";
import useInitNewTaskForm from "@/features/overview/hooks/useInitNewTaskForm";
import { constructProjectOptions } from "@/features/overview/utils/helpers";
import { FC, memo, useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import { StyledNewTaskContainer } from "./NewTask.styled";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewTask: FC<NewTaskModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewTaskForm();
  const [estimation, setEstimation] = useState(new Date());

  const { data: projects } = useGetAllProjectsQuery(undefined, {
    skip: !isOpen,
  });

  const [
    createNewProject,
    // { reset: resetNewProjectState, isLoading: isNewProjectLoading, isSuccess: isNewProjectSuccess },
  ] = useCreateNewTaskMutation();

  const projectOptions = constructProjectOptions(projects);

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

      createNewProject(x);

      setTimeout(() => {
        onClose();
        reset();
      }, 4500);
    },
    [createNewProject, estimation, onClose, reset]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewTaskContainer onSubmit={handleSubmit(submitNewTask)}>
        <Controller
          name="project"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <div className="selection">
              <Select
                label="Project Name"
                styleType="column"
                variant="gray"
                placeholder="Select Project"
                options={projectOptions}
                value={value}
                onChange={(selectedValue) => onChange(selectedValue)}
                ref={ref}
                error={errors.project?.value?.message}
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
      </StyledNewTaskContainer>
    </Modal>
  );
};

export default memo(NewTask);
