import Select from "@/components/Select";
import { Option } from "@/components/Select/Select";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { themeOptions } from "../../constant";
import { StyledThemeContainer } from "./Theme.styled";

const Theme = () => {
  const { control } = useForm({
    defaultValues: {
      theme: {
        value: "system",
        label: "System",
      },
    },
    mode: "onBlur",
  });

  const handleThemeChange = useCallback((data: Option) => {
    console.log(data);
  }, []);

  return (
    <StyledThemeContainer>
      <Controller
        name="theme"
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            label="Theme:"
            options={themeOptions}
            value={value}
            onChange={(selectedValue) => {
              onChange(selectedValue);
              handleThemeChange(selectedValue as Option);
            }}
            ref={ref}
          />
        )}
      />
    </StyledThemeContainer>
  );
};

export default Theme;
