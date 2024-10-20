import Input from "@/common/components/Input";
import { formFieldsIsRow } from "@/features/auth/constants";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { StyledRowInputFieldsContainer } from "./RowInputFields.styled";

interface RowInputFieldsProps {
  control: Control<any, any>;
  errors: FieldErrors;
  openModal: () => void;
}

const RowInputFields: FC<RowInputFieldsProps> = ({ control, errors, openModal }) => {
  return (
    <StyledRowInputFieldsContainer>
      {formFieldsIsRow.map(({ name, label, type, icon, btn }) => (
        <Controller
          key={name}
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <Input
              label={label}
              error={errors[name]?.message as string}
              type={type}
              icon={icon}
              value={value}
              onChange={onChange}
              hasBtn={btn}
              openModal={openModal}
            />
          )}
        />
      ))}
    </StyledRowInputFieldsContainer>
  );
};

export default RowInputFields;
