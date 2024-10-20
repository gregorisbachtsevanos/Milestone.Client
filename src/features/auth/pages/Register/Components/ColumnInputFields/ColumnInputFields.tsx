import Input from "@/common/components/Input";
import { formFieldsIsColumn } from "@/features/auth/constants";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { StyledColumnInputFieldsContainer } from "./ColumnInputFields.styled";

interface ColumnInputFieldsProps {
  control: Control<any, any>;
  errors: FieldErrors;
  openModal: () => void;
}

const ColumnInputFields: FC<ColumnInputFieldsProps> = ({ control, errors, openModal }) => {
  return (
    <StyledColumnInputFieldsContainer>
      {formFieldsIsColumn.map(({ name, label, type, icon, btn }) => (
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
    </StyledColumnInputFieldsContainer>
  );
};

export default ColumnInputFields;
