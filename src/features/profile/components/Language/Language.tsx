import Select from "@/components/Select";
import { Option } from "@/components/Select/Select";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { langOptions } from "../../constant";
import { StyledLanguageContainer } from "./Language.styled";

const Language = () => {
  const { control } = useForm({
    defaultValues: {
      language: {
        value: "system",
        label: "System",
      },
    },
    mode: "onBlur",
  });

  const handleLanguageChange = useCallback((data: Option) => {
    console.log(data);
  }, []);

  return (
    <StyledLanguageContainer>
      <Controller
        name="language"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            label="Language:"
            options={langOptions}
            value={value}
            onChange={(selectedValue) => {
              onChange(selectedValue);
              handleLanguageChange(selectedValue as Option);
            }}
            ref={ref}
          />
        )}
      />
    </StyledLanguageContainer>
  );
};

export default Language;
