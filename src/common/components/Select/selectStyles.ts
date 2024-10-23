import { StylesConfig } from "react-select";
import { DefaultTheme } from "styled-components";
import { Option } from "./Select";

interface SelectStylesProps {
  error?: string;
  theme: DefaultTheme;
  variant?: "dark" | "gray";
  isDisabled?: boolean;
  size?: "small";
  width?: string;
}

type IsMulti = boolean;
type SelectStylesType = (props: SelectStylesProps) => StylesConfig<Option, IsMulti>;

const black900 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[900];
const black800 = ({ theme }: { theme: DefaultTheme }) => theme.palette.black[800];

const selectStyles: SelectStylesType = ({ error, theme, isDisabled, size, variant, width }) => ({
  container: (provided) => ({
    ...provided,
    border: "none",
    pointerEvents: "initial",
    cursor: isDisabled ? "not-allowed" : "initial",
  }),

  control: () => ({
    width,
    minHeight: `${size === "small" ? "25px" : "40px"}`,
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    position: "relative",
    margin: "1px",
    backgroundColor: variant === "gray" ? black800({ theme }) : black900({ theme }),
    borderRadius: "8px",
    "&:has(input:focus)": {
      boxShadow: `rgba(255, 255, 255, 0) 0px 0px 0px 0.5px inset,
      theme.palette.white} 0px 0px 0px 1px`,
    },
    boxShadow: error
      ? "rgba(255, 255, 255, 0) 0px 0px 0px 0.5px inset, white 0px 0px 0px 1px"
      : "none",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
    height: "100%",
    lineHeight: "16px",
    fontSize: "12px",
    fontWeight: "400",
  }),

  loadingIndicator: (provided) => ({
    ...provided,
    color: theme.palette.gray[500],
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    button: {
      width: "24px",
      height: "24px",
      color: theme.palette.white,
      cursor: isDisabled ? "not-allowed" : "initial",
    },
    padding: "0 8px",
  }),

  loadingMessage: (provided) => ({
    ...provided,
    color: theme.palette.gray[500],
    fontSize: "0.75em",
  }),

  newOptionMessage: () => ({}),

  multiValue: () => ({
    backgroundColor: `${isDisabled ? "#c9c9c9" : "#6672fb"}`,
    color: theme.palette.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 3px 5px 10px",
    borderRadius: "6px",
    "& span:last-child": {
      display: "none",
    },
    "&:hover": {
      backgroundColor: "#737eff",
    },
    "&:hover .multiValueRemove": {
      backgroundColor: variant === "gray" ? black800({ theme }) : black900({ theme }),
    },
  }),

  multiValueLabel: () => ({
    color: theme.palette.white,
    marginRight: "5px",
    fontSize: "0.75em",
    height: "100%",
  }),

  menu: (provided) => ({
    ...provided,
    position: "absolute",
    zIndex: "20",
    width: "100%",
    margin: "8px auto",
    borderRadius: "8px",
    backgroundColor: variant === "gray" ? black800({ theme }) : black900({ theme }),
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25);",
    padding: "0px",
  }),

  menuList: () => ({
    maxHeight: "250px",
    overflowY: "auto",
  }),

  menuPortal: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),

  multiValueRemove: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: "none",
      color: theme.palette.gray[500],
      cursor: "pointer",
    },
  }),

  noOptionsMessage: (provided) => ({
    ...provided,
    color: theme.palette.gray[500],
    fontSize: "0.75em",
  }),

  option: () => ({
    margin: "0",
    padding: "8px 16px",
    lineHeight: "16px",
    fontSize: "12px",
    fontWeight: "400",
    color: theme.palette.gray[500],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    userSelect: "none",
    textTransform: "capitalize",

    "&:hover, &:has(.focused)": {
      outline: "none",
      background: black800,
      color: theme.palette.gray[500],
      cursor: "pointer",
    },
  }),

  groupHeading: (provided) => ({
    ...provided,
    padding: "15px 20px",
    fontSize: "0.75em",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),

  placeholder: (provided) => ({
    ...provided,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "16px",
    color: theme.palette.gray[500],
  }),

  singleValue: (provided) => ({
    ...provided,
    lineHeight: "16px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "capitalize",
    color: theme.palette.gray[500],
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "8px 16px",
    gap: "8px",
  }),
});

export default selectStyles;
