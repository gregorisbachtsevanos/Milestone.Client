import React, { useState } from "react";
import ReactSelect, {
  ActionMeta,
  DropdownIndicatorProps,
  GroupBase,
  MultiValue,
  Props,
  SingleValue,
  components,
} from "react-select";
import { useTheme } from "styled-components";
import Icons from "../Icon/Icons";
import Label from "../Label";
import { StyledSelectContainer } from "./Select.styled";
import selectStyles from "./selectStyles";

export interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends Props<Option, true> {
  label?: string;
  options: Option[];
  error?: string;
  isDisabled?: boolean;
  size?: "small";
  width?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  label,
  options,
  value,
  onChange: selectOnChange,
  error,
  isDisabled,
  size,
  width,
  isMulti,
  ...rest
}) => {
  const theme = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = (
    selected: MultiValue<Option> | SingleValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {
    if (selectOnChange) {
      selectOnChange(selected, actionMeta);
    }
  };

  const finalProps = {
    isMulti,
    options,
    value,
    menuIsOpen,
    onChange: handleChange,
    styles: selectStyles({ error, theme, isDisabled, size, width }),
    components: {
      DropdownIndicator: (
        indicatorProps: DropdownIndicatorProps<Option, boolean, GroupBase<Option>>
      ) => (
        <CustomDropdownIndicator
          {...indicatorProps}
          toggleMenu={() => !isDisabled && setMenuIsOpen((prevState) => !prevState)}
        />
      ),
    },
    ...rest,
  };

  return (
    <StyledSelectContainer>
      <Label>{label}</Label>
      <ReactSelect className="react-select" {...finalProps} />
    </StyledSelectContainer>
  );
};

const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<Option> & { toggleMenu: () => void }
) => {
  const {
    selectProps: { menuIsOpen },
    toggleMenu,
  } = props;
  //   const iconsProps = { color: "gray", size: "20px" };
  return (
    <components.DropdownIndicator {...props}>
      <button onClick={toggleMenu}>
        {menuIsOpen ? (
          <Icons name="arrow_up" color="gray" size="20px" />
        ) : (
          <Icons name="arrow_down" color="gray" size="20px" />
        )}
      </button>
    </components.DropdownIndicator>
  );
};

export default Select;
