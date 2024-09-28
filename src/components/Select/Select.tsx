import React, { useState } from "react";
import ReactSelect, {
  ActionMeta,
  DropdownIndicatorProps,
  GroupBase,
  MultiValue,
  Props,
  components,
} from "react-select";
import { useTheme } from "styled-components";
import selectStyles from "./selectStyles";
import { StyledSelectContainer } from "./Select.styled";
import Label from "../Label";
import Icon from "../Icon";
import Icons from "../Icon/Icons";

export interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends Props<Option, true> {
  options: Option[];
  customComponents?: any;
  error?: string;
  isDisabled?: boolean;
  size?: "small";
  width?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  error,
  isDisabled,
  size,
  width,
  isMulti,
  ...rest
}) => {
  const theme = useTheme();
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleChange = (selected: MultiValue<Option>, actionMeta: ActionMeta<Option>) => {
    onChange?.(selected, actionMeta);
  };

  const finalProps = {
    // ref: ref as React.Ref<SelectInstance<Option, boolean, GroupBase<Option>>>,
    // options: selectAll ? optionsWithSelectAll : options,
    // onChange: handleSelectChange,
    // onInputChange: handleInputChange,
    // onFocus: handleInputFocus,
    value: value,
    menuIsOpen,
    isDisabled,
    styles: selectStyles({ error, theme, isDisabled, size, width }),
    // defaultValue,
    // blurInputOnSelect: isMulti ? closeMenuOnSelect : blurInputOnSelect,
    isMulti: isMulti,
    // menuPortalTarget: withPortaling ? document.body : null,
    // closeMenuOnSelect,
    components: {
      //   Option: (
      //     optionProps: JSX.IntrinsicAttributes &
      //       OptionProps<Option, boolean, GroupBase<Option>> & {
      //         lastElementRef?: RefCallback<HTMLElement>;
      //       }
      //   ) => (
      //     <CustomOption {...optionProps} lastElementRef={fetchMore ? lastElementRef : undefined} />
      //   ),
      DropdownIndicator: (
        indicatorProps: JSX.IntrinsicAttributes &
          DropdownIndicatorProps<Option, boolean, GroupBase<Option>>
      ) => (
        <CustomDropdownIndicator
          {...indicatorProps}
          toggleMenu={() => !isDisabled && setMenuIsOpen((prevState) => !prevState)}
        />
      ),
      //   ...customComponents,
    },
    // ...restProps,
  };
  const reactSelectProps = { ...finalProps };

  return (
    <StyledSelectContainer>
      <Label>Theme:</Label>
      <ReactSelect
        isMulti={isMulti}
        options={options}
        value={value}
        onChange={handleChange}
        styles={selectStyles({ error, theme, isDisabled, size, width })} // Apply custom styles or default
        components={{
          DropdownIndicator: (
            indicatorProps: JSX.IntrinsicAttributes &
              DropdownIndicatorProps<Option, boolean, GroupBase<Option>>
          ) => (
            <CustomDropdownIndicator
              {...indicatorProps}
              toggleMenu={() => !isDisabled && setMenuIsOpen((prevState) => !prevState)}
            />
          ),
        }}
        {...rest}
      />
    </StyledSelectContainer>
  );
};

const CustomDropdownIndicator = (props: any & { toggleMenu: () => void }) => {
  const {
    selectProps: { menuIsOpen },
    toggleMenu,
  } = props;
  return (
    <components.DropdownIndicator {...props}>
      <button onClick={toggleMenu}>
        {menuIsOpen ? (
          <Icons name="arrow_up" color="gray" size={"20px"} />
        ) : (
          <Icons name="arrow_down" color="gray" size={"20px"} />
        )}
      </button>
    </components.DropdownIndicator>
  );
};

export default Select;
