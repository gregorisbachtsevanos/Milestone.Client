import Select from "@/components/Select";
import { Option } from "@/components/Select/Select";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { langOptions, themeOptions } from "../../constant";
import { StyledThemeAndLanguageContainer } from "./ThemeAndLanguage.styled";

const ThemeAndLanguage = () => {
  const { control } = useForm({
    defaultValues: {
      theme: {
        value: "system",
        label: "System",
      },
      language: {
        value: "system",
        label: "System",
      },
    },
    mode: "onBlur",
  });

  const handleThemeChange = useCallback((data: Option) => {
    console.log(data);
  }, []);

  const handleLanguageChange = useCallback((data: Option) => {
    console.log(data);
  }, []);

  return (
    <StyledThemeAndLanguageContainer>
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
    </StyledThemeAndLanguageContainer>
  );
};

export default ThemeAndLanguage;
