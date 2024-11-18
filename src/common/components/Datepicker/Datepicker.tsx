import React, { useEffect } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import Input from "../Input";
import { StyledDateContainer } from "./Datepicker.styled";
import { Caption } from "@/.config/theme";

type DateProps = {
  label?: string;
  error?: string;
} & DatePickerProps;

const Datepicker: React.ForwardRefRenderFunction<HTMLInputElement, DateProps> = (
  { label, error, ...rest },
  ref
) => {
  useEffect(() => {
    // Dynamically import the CSS for ReactDatePicker when the component mounts
    import("react-datepicker/dist/react-datepicker.min.css");
  }, []);

  return (
    <StyledDateContainer>
      <DatePicker
        wrapperClassName="date-picker-wrapper"
        popperClassName="date-picker-modal"
        className="date-picker"
        {...rest}
        customInput={<Input name="search" label={label} ref={ref} />}
        todayButton="Today"
      />
      {error && <Caption className="error">{error}</Caption>}
    </StyledDateContainer>
  );
};

export default Datepicker;
