import Icons from "@/components/Icon";
import Card from "../Card";
import { StyledEditContainer } from "./Edit.styled";
import { Text } from "@/theme";

const EditInfo = ({ title }: { title: string }) => {
  return (
    <Card withoutMargin>
      <StyledEditContainer>
        <Text>{title}</Text>
        <Icons name="arrow_right" color="gray" />
      </StyledEditContainer>
    </Card>
  );
};

export default EditInfo;
