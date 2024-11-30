import { useCreateNewProjectMutation } from "@/app/services/projectManagerApi";
import Button from "@/common/components/Button";
import Datepicker from "@/common/components/Datepicker";
import Input from "@/common/components/Input";
import Label from "@/common/components/Label";
import Modal from "@/common/components/Modal/Modal";
import TagsInput from "@/common/components/TagsInput";
import Textarea from "@/common/components/Textarea";
import { ProjectProps } from "@/types";
import { FC, useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import useInitNewProjectForm from "../../../../hooks/useInitNewProjectForm";
import { StyledNewProjectContainer } from "./NewProject.styled";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewProject: FC<NewProjectModalProps> = ({ isOpen, onClose }) => {
  const { methods } = useInitNewProjectForm();
  const [deadline, setDeadline] = useState(new Date());

  const [
    createNewProject,
    // { reset: resetNewProjectState, isLoading: isNewProjectLoading, isSuccess: isNewProjectSuccess },
  ] = useCreateNewProjectMutation();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  const submitNewProject = useCallback(
    (data: ProjectProps) => {
      console.log(data);
      createNewProject(data);
      setTimeout(() => {
        onClose();
        reset();
      }, 4500);
    },
    [createNewProject, onClose, reset]
  );
  console.log(errors);
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnClickOutside={() => onClose()}>
      <StyledNewProjectContainer onSubmit={handleSubmit(submitNewProject)}>
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
      </StyledNewProjectContainer>
    </Modal>
  );
};

export default NewProject;
