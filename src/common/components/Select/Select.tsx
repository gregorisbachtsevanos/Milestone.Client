import { forwardRef, useState } from "react";
import ReactSelect, {
  ActionMeta,
  DropdownIndicatorProps,
  GroupBase,
  Props,
  SelectInstance,
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
  styleType?: "column";
  variant?: "dark" | "gray";
  options: Option[];
  error?: string;
  isDisabled?: boolean;
  size?: "small";
  width?: string;
}
export type SelectProps<
  Option,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & CustomSelectProps;

const Select = forwardRef<SelectInstance<Option, boolean, GroupBase<Option>>, SelectProps<Option>>(
  (
    {
      label,
      styleType,
      options,
      value,
      onChange: selectOnChange,
      error,
      isDisabled,
      size,
      width,
      variant,
      isMulti,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleChange = (selected: Option, actionMeta: ActionMeta<Option>) => {
      if (selectOnChange) {
        selectOnChange(selected, actionMeta);
        setMenuIsOpen((prevState) => !prevState);
      }
    };

    const finalProps = {
      ref,
      isMulti,
      options,
      value,
      menuIsOpen,
      onChange: handleChange,
      onInputChange: () => setMenuIsOpen(false),
      styles: selectStyles({ error, theme, isDisabled, size, width, variant }),
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
      <StyledSelectContainer
        className={styleType}
        onClick={() => setMenuIsOpen((prevState) => !prevState)}
      >
        <Label>{label}</Label>
        <ReactSelect className="react-select" {...finalProps} />
      </StyledSelectContainer>
    );
  }
);

const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<Option> & { toggleMenu: () => void }
) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <components.DropdownIndicator {...props}>
      <button>
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
