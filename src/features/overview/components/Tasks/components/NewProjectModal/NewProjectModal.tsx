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
import { ProjectType } from "@/types";
import { FC, useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import useInitNewProjectForm from "../../../../hooks/useInitNewProjectForm";
import { StyledNewProjectModalContainer } from "./NewProjectModal.styled";
import { setLoaderIsOpen } from "@/app/slice";
import { useDispatch } from "react-redux";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProjectModal: FC<NewProjectModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewProjectForm();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const [
    createNewProject,
    { reset: resetNewProjectState, isLoading: isNewProjectLoading, isSuccess: isNewProjectSuccess },
  ] = useCreateNewProjectMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const submitNewTask = useCallback(
    (data: ProjectType) => {
      createNewProject(data);
      dispatch(setLoaderIsOpen(true));
    },
    [createNewProject, dispatch]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewProjectModalContainer onSubmit={handleSubmit(submitNewTask)}>
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
          render={() => (
            <div className="datepicker">
              <Label>Deadline</Label>
              <Datepicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                onChange={(date) => setStartDate(date as Date)}
                minDate={new Date()}
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
      </StyledNewProjectModalContainer>
    </Modal>
  );
};

export default NewProjectModal;
