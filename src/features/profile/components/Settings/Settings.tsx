import Card from "../Card";
import { StyledSettingsContainer } from "./Settings.styled";
import Select from "react-select";
const options = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];
const Settings = () => {
  return (
    <Card>
      <StyledSettingsContainer>
        <Select defaultValue={options[0]} options={options} />
      </StyledSettingsContainer>
    </Card>
  );
};

export default Settings;
