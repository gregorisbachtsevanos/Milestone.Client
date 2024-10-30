import React, { useEffect } from "react";
import DatePicker, { DatePickerProps } from "react-datepicker";
import Input from "../Input";
import { StyledDateContainer } from "./Datepicker.styled";

type DateProps = {
  label?: string;
} & DatePickerProps;

const Datepicker: React.ForwardRefRenderFunction<HTMLInputElement, DateProps> = (
  { label, ...rest },
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
    </StyledDateContainer>
  );
};

export default Datepicker;
